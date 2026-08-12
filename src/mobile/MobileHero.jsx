import CONFIG from '../shared/data';
import { getWaLink } from '../shared/utils';
import Icon from '../shared/Icon';

export default function MobileHero() {
  return (
    <header style={{ padding: '40px 16px 30px', textAlign: 'center' }}>
      {/* Logo Section */}
      <div style={{ marginBottom: 20 }}>
        <img
          src="/logo.png"
          alt={CONFIG.name}
          style={{
            width: 100, height: 100, borderRadius: 24,
            border: '3px solid rgba(59,130,246,.5)',
            boxShadow: '0 0 40px rgba(59,130,246,.4), 0 0 80px rgba(59,130,246,.2)',
          }}
        />
      </div>

      {/* Status */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        padding: '5px 12px', borderRadius: 999,
        background: 'rgba(34,197,94,.12)', border: '1px solid rgba(34,197,94,.3)',
        fontSize: '.73rem', fontWeight: 600, color: '#bbf7d0',
        marginBottom: 16,
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px #22c55e' }} />
        Tersedia untuk project baru
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: '"Space Grotesk", sans-serif',
        fontSize: 'clamp(1.6rem, 7vw, 2.2rem)',
        fontWeight: 800, letterSpacing: '-.03em',
        background: 'linear-gradient(120deg, #fff 20%, #3b82f6 45%, #06b6d4 65%, #6366f1 90%)',
        WebkitBackgroundClip: 'text', backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', color: 'transparent',
        backgroundSize: '200% auto', animation: 'shineText 7s linear infinite',
        marginBottom: 8,
      }}>
        {CONFIG.name}
      </h1>
      <p style={{ fontSize: '.9rem', color: '#dfe4ff', fontWeight: 500, marginBottom: 16 }}>
        {CONFIG.role}
      </p>

      {/* Value props - short */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 6,
        marginBottom: 20,
      }}>
        {['Sistem Web', 'Aplikasi Mobile', 'Dashboard & Laporan', 'Aman'].map(chip => (
          <span key={chip} style={{
            padding: '6px 12px', fontSize: '.7rem', fontWeight: 600,
            color: '#cfe7ff', background: 'rgba(255,255,255,.06)',
            border: '1px solid rgba(255,255,255,.1)', borderRadius: 999,
          }}>
            {chip}
          </span>
        ))}
      </div>

      {/* One-line pitch */}
      <p style={{ fontSize: '.9rem', color: '#9ba3c4', lineHeight: 1.7, marginBottom: 24, maxWidth: 400, margin: '0 auto 24px' }}>
        Saya ubah catatan manual Anda jadi <b style={{ color: '#fff' }}>sistem digital</b> — lengkap dashboard & laporan, bisa dibuka dari HP atau komputer.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', marginBottom: 32 }}>
        <a className="btn btn-primary" href={getWaLink()} target="_blank" rel="noopener noreferrer" style={{ width: '100%', maxWidth: 300 }}>
          <Icon name="wa" size={18} /> Konsultasi Gratis via WhatsApp
        </a>
        <a className="btn btn-ghost" href="#portfolio" style={{ width: '100%', maxWidth: 300 }}>
          <Icon name="ext" size={15} /> Lihat Hasil Kerja
        </a>
      </div>

      {/* Trust badges */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, maxWidth: 360, margin: '0 auto',
      }}>
        {CONFIG.trust.map(t => (
          <div key={t.label} style={{
            padding: '12px 10px', textAlign: 'center',
            background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 12,
          }}>
            <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{t.number}</div>
            <div style={{ fontSize: '.7rem', color: '#9ba3c4', marginTop: 2 }}>{t.label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
