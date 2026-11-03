
'use client';
import { useState } from 'react';

export default function BirthdayPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Ganti src dengan direct link Google Drive foto keluarga Anda
  const photos = [
    { src: '/images/foto1.JPG', caption: 'Setiap detik bersamamu adalah anugerah terindah ❤️' },
    { src: '/images/foto2.JPG', 'Keluarga kecil, dermaga kebahagiaan kita 🥰' },
    { src: '/images/foto3.JPG', caption: 'Terima kasih telah menjadi pelabuhan terindah dalam hidupku ✨' },
  ];

  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '24px', 
      background: 'linear-gradient(135deg, #070b19 0%, #111b33 50%, #04060d 100%)',
      fontFamily: '"Cormorant Garamond", Georgia, serif, system-ui, -apple-system',
      color: '#1e293b'
    }}>
      {!isOpen ? (
        /* Halaman Pembuka / Amplop Digital Kelas Bangsawan */
        <div style={{ 
          background: 'rgba(253, 251, 247, 0.95)', 
          backdropFilter: 'blur(16px)',
          padding: '48px 36px', 
          borderRadius: '12px', 
          boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(212, 175, 55, 0.3)', 
          maxWidth: '440px', 
          width: '100%', 
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{ position: 'absolute', top: '16px', left: '16px', right: '16px', bottom: '16px', border: '1px solid rgba(212, 175, 55, 0.2)', pointerEvents: 'none', borderRadius: '8px' }}></div>
          
          <span style={{ fontSize: '42px', display: 'block', marginBottom: '16px', color: '#b8860b' }}>❦</span>
          <h1 style={{ fontSize: '26px', fontWeight: '600', color: '#0f172a', marginBottom: '12px', letterSpacing: '1px' }}>
            Untuk Sang Pemilik Hati
          </h1>
          <div style={{ width: '40px', height: '2px', background: '#d4af37', margin: '0 auto 20px auto' }}></div>
          <p style={{ fontSize: '15px', color: '#475569', marginBottom: '32px', lineHeight: '1.8', fontStyle: 'italic' }}>
            "Ada secarik rasa dan cinta abadi yang sengaja kuukir khusus untuk merayakan hari istimewamu..."
          </p>
          
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            style={{
              width: '100%',
              backgroundColor: '#0f172a',
              color: '#fdfbf7',
              fontWeight: '500',
              padding: '16px 24px',
              borderRadius: '4px',
              border: '1px solid #d4af37',
              cursor: 'pointer',
              fontSize: '15px',
              letterSpacing: '1.5px',
              boxShadow: '0 10px 20px rgba(15, 23, 42, 0.3)',
              transition: 'all 0.3s ease'
            }}
          >
            BUKA KADO ISTIMEWA ✦
          </button>
        </div>
      ) : (
        /* Halaman Utama Ucapan Elegan & Galeri */
        <div style={{ 
          background: 'rgba(253, 251, 247, 0.98)', 
          backdropFilter: 'blur(20px)',
          padding: '44px 36px', 
          borderRadius: '16px', 
          boxShadow: '0 30px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(212, 175, 55, 0.4)', 
          maxWidth: '680px', 
          width: '100%', 
          margin: '20px 0',
          position: 'relative'
        }}>
          {/* Header Ucapan */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{ fontSize: '28px', display: 'block', marginBottom: '6px', color: '#b8860b' }}>✦ ❦ ✦</span>
            <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '8px', letterSpacing: '0.5px' }}>
              Selamat Ulang Tahun, Istriku
            </h1>
            <p style={{ fontSize: '16px', color: '#b8860b', fontWeight: '500', fontStyle: 'italic', letterSpacing: '0.5px' }}>
              Barakallahu Fii Umrik, ratu di istana hatiku...
            </p>
            <div style={{ width: '60px', height: '1px', background: '#d4af37', margin: '20px auto 0 auto' }}></div>
          </div>

          {/* Kartu Pesan Puitis Berkelas */}
          <div style={{ 
            backgroundColor: '#f7f4ed', 
            padding: '28px', 
            borderRadius: '8px', 
            marginBottom: '36px', 
            borderLeft: '3px solid #d4af37',
            borderRight: '1px solid rgba(212, 175, 55, 0.15)',
            borderTop: '1px solid rgba(212, 175, 55, 0.15)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
            color: '#1e293b', 
            lineHeight: '1.9', 
            fontSize: '16px'
          }}>
            <p style={{ marginBottom: '16px', textIndent: '24px' }}>
              Waktu terus berjalan, namun keanggunan dan ketulusan cintamu tak pernah pudar oleh usia. Di antara riuhnya dunia, engkau tetaplah ketenangan paling indah yang Tuhan titipkan ke dalam hidupku. Terima kasih telah menjadi pelabuhan terhangat dan ibu teladan bagi anak-anak kita.
            </p>
            <p style={{ marginBottom: '16px', textIndent: '24px' }}>
              Semoga di pertambahan usia ini, Allah SWT senantiasa melimpahkan kesehatan yang sempurna, memberkahi setiap langkah pengorbananmu, dan memeluk semua impian indah yang tersimpan di dalam hatimu.
            </p>
            <p style={{ textAlign: 'right', fontWeight: '600', color: '#0f172a', marginTop: '24px', fontStyle: 'italic' }}>
              — Dari suamimu, dengan cinta dan hormat yang abadi ❤️
            </p>
          </div>

          {/* Galeri Kenangan Mewah */}
          <h2 style={{ fontSize: '19px', fontWeight: '600', color: '#0f172a', marginBottom: '24px', textAlign: 'center', letterSpacing: '1px' }}>
            — JEJAK LANGKAH & KISAH KITA —
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {photos.map((photo, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                border: '1px solid rgba(212, 175, 55, 0.3)', 
                boxShadow: '0 8px 20px rgba(0,0,0,0.06)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ height: '190px', width: '100%', backgroundColor: '#e2e8f0', position: 'relative' }}>
                  <img 
                    src={photo.src} 
                    alt={photo.caption} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <p style={{ padding: '14px', fontSize: '13px', textAlign: 'center', color: '#475569', fontStyle: 'italic', lineHeight: '1.5' }}>
                  "{photo.caption}"
                </p>
              </div>
            ))}
          </div>

          {/* Footer Berkelas */}
          <div style={{ textAlign: 'center', fontSize: '11px', color: '#64748b', marginTop: '24px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            CELEBRATING A TIMELESS LOVE • FOREVER YOURS
          </div>
        </div>
      )}
    </main>
  );
}