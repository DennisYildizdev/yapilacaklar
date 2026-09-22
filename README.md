# Yapılacaklar — Bir adım daha

## Lisans

Bu proje [MIT lisansı](LICENSE) ile sunulmaktadır.

Türkçe, sade ve telefon ekranlarına uyumlu bir yapılacaklar uygulaması. İlk GitHub projesi olarak HTML, CSS, JavaScript ve Git'in temel akışını öğrenmek için hazırlanmıştır.

## Kullanım

Bu klasördeki `index.html` dosyasını bir tarayıcıyla aç. Kurulum, sunucu veya paket yüklemesi gerekmez. Görevini yazıp **Ekle** düğmesine veya Enter'a bas. Kutucuğu işaretleyerek tamamla, tekrar tıklayarak geri al. Çöp kutusu düğmesi görevi siler.

## Özellikler

- Görev ekleme, tamamlama, geri alma ve silme.
- Boş görev kontrolü, klavye kullanımı ve görünür odak göstergeleri.
- Türkçe karakterler, dar ekranlar ve uzun görev metinleri için destek.
- Tarayıcıda yerel kayıt; kayıt sorunu olduğunda anlaşılır uyarı.
- Ek kütüphane, hesap veya sunucu gerektirmez.

Görevler yalnızca kullanılan tarayıcıda saklanır; GitHub'a gönderilmez. Tarayıcı verileri silinirse görevler de silinir. Cihazlar arasında eşitlenmez. Yerel dosya ve yayınlanan site ayrı kayıt alanları kullanır. Aynı listeyi birden fazla sekmede eşzamanlı düzenlemek desteklenmez.

## Proje yapısı

- `index.html`: Sayfa yapısı ve erişilebilir etiketler.
- `style.css`: Görünüm ve mobil düzen.
- `script.js`: Görev işlemleri ve localStorage kaydı.
- `.nojekyll`: GitHub Pages için doğrudan statik yayın.

## GitHub Desktop ile öğrenme

1. **File → Add local repository** ile bu klasörü seç.
2. Henüz Git deposu değilse **create a repository here** seçeneğini kullan.
3. Değişiklikleri incele, kısa bir açıklama yaz ve **Commit to main** seç.
4. **Publish repository** seçeneğinde adı `yapilacaklar` yap ve **Keep this code private** işaretini kaldırarak yayınla.
5. Sonraki değişikliklerinde önce commit, sonra **Push origin** kullan.

**Commit**, değişikliklerin bilgisayarındaki açıklamalı kaydıdır. **Push**, bu kayıtları GitHub'a gönderir. Kaydedilmiş bir dosya, commit ve push yapılana kadar GitHub'da güncellenmez.

## GitHub Pages ile yayınlama

Depoda **Settings → Pages → Build and deployment** bölümüne gir. Kaynak olarak **Deploy from a branch**, dal olarak **main**, klasör olarak **/(root)** seçip kaydet. Yayın tamamlandığında aynı bölümde verilen site adresini aç. Bu adresi README'ye ve deponun **About → Website** alanına ekle.

Sonrasında `index.html` içindeki alt bilgi cümlesini değiştir, commit yap ve **Push origin** ile gönder. Pages yayını tamamlanınca sitede yeni metni kontrol et.

## Kontrol listesi

- [ ] Ekle düğmesi ve Enter ile görev ekleniyor.
- [ ] Boşluklardan oluşan görev reddediliyor.
- [ ] Tamamlama, geri alma ve silme çalışıyor.
- [ ] Yenileme sonrası görevler ve tamamlanma durumu korunuyor.
- [ ] Türkçe karakterler ve uzun metinler doğru görünüyor.
- [ ] Tab, Enter ve Space ile görevler yönetilebiliyor.
- [ ] Telefon genişliğinde yatay taşma olmuyor.
- [ ] Yayındaki sürümde de tüm işlemler çalışıyor.
- [ ] Commit ve push sonrası metin değişikliği canlı sitede görünüyor.

Resmî rehberler: [GitHub Desktop](https://docs.github.com/en/desktop/overview/creating-your-first-repository-using-github-desktop) · [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
