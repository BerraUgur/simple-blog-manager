# Blog Yönetim Uygulaması

Bu proje, React ve Tailwind CSS kullanılarak geliştirilmiş bir blog yönetim uygulamasıdır.

## Özellikler

- Blog yazılarını listeleme
- Yeni blog ekleme
- Blog düzenleme
- Blog silme
- Başlık, içerik veya yazara göre arama
- Tarih veya yazara göre sıralama
- Form validasyonları
- Responsive tasarım

## Ekran Görüntüleri

![Ana Sayfa](screenshots/main.png)
![Blog Ekleme](screenshots/add-blog.png)
![Blog Düzenleme](screenshots/edit-blog.png)

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/kullaniciadi/blog-yonetim.git
cd blog-yonetim
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresini açın.

## Kullanılan Teknolojiler

- React
- Tailwind CSS
- PropTypes
- Vite

## Proje Yapısı

```
src/
  ├── components/
  │   └── BlogList/
  │       ├── BlogItem.jsx
  │       ├── BlogList.jsx
  │       ├── AddNewBlog.jsx
  │       └── EditBlogModal.jsx
  ├── data/
  │   └── blogData.js
  ├── App.jsx
  └── main.jsx
```

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeniOzellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik: Açıklama'`)
4. Branch'inizi push edin (`git push origin feature/yeniOzellik`)
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.
