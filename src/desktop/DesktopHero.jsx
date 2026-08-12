import CONFIG from '../shared/data';
import { getWaLink } from '../shared/utils';
import Icon from '../shared/Icon';

export default function DesktopHero() {
  return (
    <header style={{
      maxWidth: 900, margin: '0 auto', padding: '80px 32px 60px',
      textAlign: 'center',
    }}>
      {/* Logo + Status row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 28 }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: -4, borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #3b82f6, #6366f1, #06b6d4, #3b82f6)',
            animation: 'spinRing 7s linear infinite',
            filter: 'drop-shadow(0 0 16px rgba(59,130,246,.5))',
          }} />
          <img
            src="/logo.png"
            alt={CONFIG.name}
            style={{
              position: 'relative', width: 110, height: 110, borderRadius: '50%',
              border: '4px solid rgba(5,5,15,.9)', zIndex: 1,
            }}
          />
        </div>

        <div style={{ textAlign: 'left' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '5px 12px', borderRadius: 999,
            background: 'rgba(34,197,94,.12)', border: '1px solid rgba(34,197,94,.3)',
            fontSize: '.73rem', fontWeight: 600, color: '#bbf7d0',
            marginBottom: 10,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e', animation: 'pulse 2.2s ease-in-out infinite' }} />
            Tersedia untuk project baru
          </div>
          <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.2rem', fontWeight: 700, color: '#dfe4ff' }}>
            {CONFIG.role}
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
        fontWeight: 800, letterSpacing: '-.03em',
        background: 'linear-gradient(120deg, #fff 20%, #3b82f6 45%, #06b6d4 65%, #6366f1 90%)',
        WebkitBackgroundClip: 'text', backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', color: 'transparent',
        backgroundSize: '200% auto', animation: 'shineText 7s linear infinite',
        marginBottom: 20,
      }}>
        {CONFIG.name}
      </h1>

      {/* Role chips */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {[
          { icon: 'globe', label: 'Sistem Web' },
          { icon: 'smartphone', label: 'Aplikasi Mobile' },
          { icon: 'chart', label: 'Dashboard & Laporan' },
          { icon: 'shield', label: 'Aman' },
        ].map(c => (
          <span key={c.label} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px', fontSize: '.78rem', fontWeight: 600,
            color: '#cfe7ff', background: 'rgba(255,255,255,.06)',
            border: '1px solid rgba(255,255,255,.1)', borderRadius: 999,
          }}>
            <Icon name={c.icon} size={14} /> {c.label}
          </span>
        ))}
      </div>

      {/* Pitch */}
      <p style={{ fontSize: '1.05rem', color: '#9ba3c4', lineHeight: 1.8, maxWidth: 650, margin: '0 auto 30px' }}>
        Saya ubah catatan manual Anda — buku, Excel, kertas — jadi <b style={{ color: '#fff' }}>satu sistem digital</b>.
        Lengkap dengan dashboard, laporan otomatis, dan bisa dibuka dari HP maupun komputer.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 48 }}>
        <a className="btn btn-primary" href={getWaLink()} target="_blank" rel="noopener noreferrer">
          <Icon name="wa" size={18} /> Konsultasi Gratis via WhatsApp
        </a>
        <a className="btn btn-ghost" href="#portfolio">
          <Icon name="ext" size={15} /> Lihat Hasil Kerja
        </a>
      </div>

      {/* Trust row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, maxWidth: 700, margin: '0 auto' }}>
        {CONFIG.trust.map(t => (
          <div key={t.label} style={{
            padding: '18px 14px', textAlign: 'center',
            background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 14,
          }}>
            <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.4rem', fontWeight: 700, color: '#fff' }}>{t.number}</div>
            <div style={{ fontSize: '.76rem', color: '#9ba3c4', marginTop: 4 }}>{t.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes spinRing { to { transform: rotate(360deg); } }
        @keyframes pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,.55), 0 0 12px rgba(34,197,94,.9); }
          50%     { box-shadow: 0 0 0 9px rgba(34,197,94,0),   0 0 12px rgba(34,197,94,.9); }
        }
        @keyframes shineText { to { background-position: 200% center; } }
      `}</style>
    </header>
  );
}
