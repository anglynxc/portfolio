# Cara memasukkan foto, sertifikat, dan gambar project

Simpan semua gambar di folder `public/images/`. Vite akan menyajikan file di folder `public` langsung dari root URL.

## 1. Foto profil
1. Siapkan foto portrait yang jelas (JPG/PNG).
2. Simpan/rename menjadi `profile.jpg` di `public/images/profile.jpg`.
3. Refresh browser. Jika belum memasukkan foto, placeholder berinisial akan tampil.

## 2. Sertifikat (Milestones & Learning)
1. Simpan gambar sertifikat ke `public/images/certificates/`, contoh `solana-course.jpg`.
2. Buka `src/App.jsx`, cari array `credentials` di bagian atas.
3. Isi `image` dengan path dari root public, contoh:
   `image: '/images/certificates/solana-course.jpg'`
4. Ganti juga `title`, `issuer`, `date`, `type`, dan `detail` dengan data asli.
5. Tipe yang tersedia: `Certifications`, `Awards`, `Achievements`, `Courses`.
6. Klik kartu sertifikat di browser untuk melihat preview lebih besar.

Contoh objek:
```js
{
  title: 'Solana Fundamentals',
  issuer: 'Penyelenggara Sertifikat',
  date: '2026',
  type: 'Certifications',
  detail: 'Mempelajari dasar-dasar ekosistem Solana.',
  image: '/images/certificates/solana-course.jpg'
}
```

## 3. Gambar project
1. Simpan screenshot project ke `public/images/projects/`, contoh `limit-in.png`.
2. Di array `projects` pada `src/App.jsx`, isi properti `image`:
   `image: '/images/projects/limit-in.png'`
3. Ganti `title`, `description`, `stack` sesuai project asli.
4. Isi `liveUrl` dan/atau `repoUrl` untuk menampilkan tautan demo dan source code. Biarkan `''` jika belum ada.

Contoh objek:
```js
{
  number: '01',
  category: 'Web Application',
  title: 'LIMIT-IN',
  description: 'Aplikasi pencatatan keuangan untuk nelayan.',
  stack: ['Flutter', 'Laravel', 'MySQL'],
  tone: 'project-sand',
  image: '/images/projects/limit-in.png',
  liveUrl: 'https://contoh-demo.vercel.app',
  repoUrl: 'https://github.com/username/repository'
}
```

## Catatan penting
- Gunakan path seperti `/images/...`, bukan `src/assets/...`, untuk file yang disimpan di `public`.
- Untuk sertifikat, gambar PNG/JPG disarankan; scan yang terbaca jelas lebih baik daripada foto miring.
- Jangan unggah sertifikat yang memuat data sensitif yang tidak ingin ditampilkan publik.
- Setelah menambahkan file gambar, tidak perlu import gambar ke `App.jsx` jika gambar berada di `public`.
