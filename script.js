(() => {
  'use strict';
  const storageKey = 'yapilacaklar.tasks.v1';
  const form = document.querySelector('#task-form');
  const input = document.querySelector('#task-input');
  const list = document.querySelector('#task-list');
  const error = document.querySelector('#input-error');
  const storageError = document.querySelector('#storage-error');
  const announcement = document.querySelector('#announcement');
  let tasks = [];
  let unreadableStorage = false;

  function warn(message) {
    storageError.textContent = message;
    storageError.hidden = false;
  }

  try {
    const saved = localStorage.getItem(storageKey);
    if (saved !== null) {
      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed) || !parsed.every(task => task && typeof task.id === 'string' && typeof task.text === 'string' && task.text.trim() && typeof task.completed === 'boolean') || new Set(parsed.map(task => task.id)).size !== parsed.length) {
        throw new Error('Geçersiz kayıt');
      }
      tasks = parsed;
    }
  } catch {
    unreadableStorage = true;
    warn('Kayıtlı görevler okunamadı. Önceki kayıtları korumak için yeni değişiklikler yalnızca bu sayfa açıkken tutulacak.');
  }

  function save() {
    if (unreadableStorage) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(tasks));
      storageError.hidden = true;
    } catch {
      warn('Görevler kaydedilemedi. Bu sayfa açıkken çalışmaya devam edebilirsin; sayfayı kapatır veya yenilersen son değişiklikler kaybolabilir.');
    }
  }

  function render() {
    list.replaceChildren();
    tasks.forEach(task => {
      const item = document.createElement('li');
      item.classList.toggle('completed', task.completed);
      const label = document.createElement('label');
      label.className = 'task-label';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      const text = document.createElement('span');
      text.className = 'task-text';
      text.textContent = task.text;
      checkbox.addEventListener('change', () => {
        task.completed = checkbox.checked;
        item.classList.toggle('completed', task.completed);
        save();
        updateSummary();
        announcement.textContent = task.completed ? 'Görev tamamlandı.' : 'Görev yeniden yapılacaklara alındı.';
      });
      label.append(checkbox, text);
      const remove = document.createElement('button');
      remove.type = 'button';
      remove.className = 'delete';
      remove.setAttribute('aria-label', `${task.text} görevini sil`);
      remove.title = 'Görevi sil';
      remove.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 10v7M14 10v7"/></svg>';
      remove.addEventListener('click', () => {
        const index = tasks.findIndex(entry => entry.id === task.id);
        tasks.splice(index, 1);
        save();
        render();
        const next = list.children[Math.min(index, tasks.length - 1)];
        (next ? next.querySelector('.delete') : input).focus();
        announcement.textContent = 'Görev silindi.';
      });
      item.append(label, remove);
      list.append(item);
    });
    updateSummary();
  }

  function updateSummary() {
    const completed = tasks.filter(task => task.completed).length;
    document.querySelector('#count').textContent = `${tasks.length} görev`;
    document.querySelector('#empty').hidden = tasks.length > 0;
    document.querySelector('#progress').textContent = tasks.length === 0
      ? 'Bugünün ritmini sen belirle.'
      : completed === tasks.length ? 'Hepsi tamamlandı. Kendine bir mola ver.'
      : `${tasks.length - completed} görev kaldı · ${completed} tamamlandı`;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) {
      error.textContent = 'Eklemek için bir görev yaz.';
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }
    tasks.push({ id: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`, text, completed: false });
    save();
    render();
    input.value = '';
    error.textContent = '';
    input.removeAttribute('aria-invalid');
    input.focus();
    announcement.textContent = 'Görev eklendi.';
  });
  input.addEventListener('input', () => {
    error.textContent = '';
    input.removeAttribute('aria-invalid');
  });
  render();
})();
