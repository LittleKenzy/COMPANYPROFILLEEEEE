# Company Profile Website

Website company profile modern dan responsif yang dibangun menggunakan **React** dan **Vite**. Project ini didesain mobile-first dengan fitur-fitur seperti sticky navbar, smooth scrolling, dan grid layout yang adaptif.

## Fitur Utama

- ⚡ **Vite + React**: Performa cepat dan ringan.
- 📱 **Mobile-First Design**: Tampilan optimal di semua ukuran layar.
- 🍔 **Hamburger Menu**: Navigasi responsif untuk mobile.
- 🎨 **Modern UI**: Menggunakan CSS Modules dan Lucide Icons.
- 📍 **Smooth Scroll**: Navigasi antar section yang halus.

## Prasyarat

Sebelum memulai, pastikan laptop/PC kamu sudah terinstall:

- [Node.js](https://nodejs.org/) (Versi 18 atau lebih baru disarankan)
- [Git](https://git-scm.com/)

## Cara Menjalankan Project (Step-by-Step)

Ikuti langkah-langkah berikut untuk menjalankan project ini di komputer lokal kamu:

### 1. Clone Repository

Buka terminal atau command prompt, lalu jalankan perintah berikut untuk mendownload project:

```bash
git clone https://github.com/username/company-profile.git
```
*(Ganti URL di atas dengan URL repository GitHub kamu jika sudah di-push)*

Jika belum ada repository remote, kamu bisa langsung masuk ke folder project jika sudah memilikinya secara lokal.

### 2. Masuk ke Direktori Project

Pindah ke folder project yang baru saja di-clone:

```bash
cd company-profile
```

### 3. Install Dependencies

Install semua library yang dibutuhkan menggunakan npm:

```bash
npm install
```

### 4. Jalankan Development Server

Mulai server lokal untuk melihat website:

```bash
npm run dev
```

Setelah perintah ini dijalankan, terminal akan menampilkan alamat lokal, biasanya:
`http://localhost:5173/`

Buka link tersebut di browser (Chrome, Edge, Firefox, dll).

## Perintah Lainnya

- **Build untuk Production**:
  ```bash
  npm run build
  ```
  Perintah ini akan membuat folder `dist` yang siap untuk di-deploy ke hosting.

- **Preview Hasil Build**:
  ```bash
  npm run preview
  ```

## Struktur Project

```
src/
├── components/     # Komponen React (Navbar, Hero, dll)
├── App.jsx         # Layout utama
├── index.css       # Global styles & variabel CSS
└── main.jsx        # Entry point aplikasi
```

## Teknologi yang Digunakan

- React JS
- Vite
- CSS Modules
- Lucide React (Icons)

---
