import { useEffect, useState } from 'react';
import './HeroVisual.css';

// Foto pertama jadi foto utama. Tambah foto lain di sini kalau nanti mau lebih dari 2.
const photos = ['/images/profile.jpeg', '/images/profile-2.jpeg'];
const SWITCH_EVERY_MS = 4500;

export default function HeroVisual() {
  const [current, setCurrent] = useState(0);
  const [mainFailed, setMainFailed] = useState(false);

  // Ganti foto otomatis, kecuali pengguna mengaktifkan "reduce motion"
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || photos.length < 2) return undefined;

    const id = setInterval(() => {
      setCurrent((index) => (index + 1) % photos.length);
    }, SWITCH_EVERY_MS);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="hero-visual" aria-label="Personal profile photo">
      <div className="visual-outline"></div>

      <div className="profile-photo-frame">
        {mainFailed ? (
          <div className="profile-photo-placeholder">
            <span className="placeholder-mark">a<span>.</span></span>
            <span className="placeholder-caption">ADD YOUR PHOTO</span>
          </div>
        ) : (
          photos.map((src, index) => (
            <img
              key={src}
              className={
                index === 0
                  ? 'profile-photo'
                  : `profile-photo profile-photo-slide${current === index ? ' is-active' : ''}`
              }
              src={src}
              alt="Foto profil Angelina"
              onError={(event) => {
                // Foto utama gagal -> tampilkan placeholder. Foto lain gagal -> sembunyikan saja.
                if (index === 0) setMainFailed(true);
                else event.currentTarget.style.display = 'none';
              }}
            />
          ))
        )}
      </div>

      <div className="hero-badge hero-badge-top">
        <span className="note-dot"></span> Open to opportunities
      </div>
      <div className="hero-badge hero-badge-bottom">Web Developer</div>

      <span className="decorative-star star-one">✳</span>
      <span className="decorative-star star-two">✳</span>
    </div>
  );
}
