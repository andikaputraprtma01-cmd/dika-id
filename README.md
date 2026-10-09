# dika.id

Website statis dengan file HTML, React JSX, CSS, dan aset lokal.

## Struktur

- `index.html`: pintu masuk standar untuk hosting statis.
- `website_dika_id.html`: halaman utama.
- `app.jsx`: komponen halaman dan data layanan/portofolio.
- `styles.css`: stylesheet tambahan.
- `images/logo.svg`: logo situs.
- `images/portfolio/`: foto-foto portofolio.

## Menjalankan secara lokal

Jalankan perintah ini dari folder proyek di PowerShell:

```powershell
php -S 127.0.0.1:8000
```

Buka `http://127.0.0.1:8000/` di browser. Jangan membuka file HTML langsung lewat `file://`, karena browser dapat memblokir pemuatan JSX eksternal.

## Mengganti foto portofolio

Simpan foto dalam folder `images/portfolio/` dengan nama `portfolio-01.jpg` sampai `portfolio-06.jpg`. Judul, kategori, deskripsi, dan lokasi gambar dapat diubah pada `portfolioData` di `app.jsx`.

## Hosting

Unggah semua file dan folder proyek ke layanan hosting statis. Pastikan `index.html`, `website_dika_id.html`, `app.jsx`, `styles.css`, dan folder `images/` ikut terunggah. Situs memakai CDN React, Babel, Tailwind, dan Google Fonts, jadi browser pengunjung perlu koneksi internet.
