# Çalışan Yönetimi Ön Yüz Uygulaması (React Frontend)

Bu proje, Çalışan Yönetimi API'si ile iletişim kuran ve verileri kullanıcıya görsel bir arayüzde sunan bir React uygulamasıdır.

## Özellikler

- **Çalışan Listesi:** API'den gelen çalışan verilerini bir tablo halinde gösterir.
- **Çalışan Ekleme Formu:** Yeni çalışan eklemek için bir form sağlar.
- **Çalışan Silme:** Her çalışanın yanındaki bir buton ile çalışanları silme işlevi.

## Teknolojiler

- **Frontend:** React
- **Build Aracı:** Vite
- **API Entegrasyonu:** `fetch` API

## Gereksinimler

- Node.js ve npm

## Başlangıç

1.  **Projeyi Klonla:**
    ```bash
    git clone [https://github.com/SENIN_GITHUB_ADIN/employee-frontend.git](https://github.com/SENIN_GITHUB_ADIN/employee-frontend.git)
    cd employee-frontend
    ```

2.  **Bağımlılıkları Yükle:**
    ```bash
    npm install
    ```

3.  **Uygulamayı Çalıştır:**
    ```bash
    npm run dev
    ```
    Uygulama, `http://localhost:5173` adresinde çalışmaya başlayacaktır.

**NOT:** Bu uygulamanın doğru çalışması için, arka uç API'sinin (`calisan-yonetim-web` projesi) `http://localhost:8080` adresinde çalışıyor olması gerekir.
