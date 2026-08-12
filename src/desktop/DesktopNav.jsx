import CONFIG from '../shared/data';
import { getWaLink } from '../shared/utils';
import Icon from '../shared/Icon';

export default function DesktopNav() {
  const sections = ['Layanan', 'Portfolio', 'Fitur', 'Harga', 'Kontak'];

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      backdropFilter: 'blur(14px) saturate(1.3)',
      WebkitBackdropFilter: 'blur(14px) saturate(1.3)',
      background: 'rgba(5,5,15,.75)',
      borderBottom: '1px solid rgba(255,255,255,.1)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64, gap: 24,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '1.05rem' }}>
          <img src="/logo.png" alt={CONFIG.name} style={{ width: 32, height: 32, borderRadius: 8 }} />
          {CONFIG.name}
        </div>

        <div style={{ display: 'flex', gap: 28, fontSize: '.88rem', color: '#9ba3c4' }}>
          {sections.map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'none', transition: 'color .2s' }}>
              {s}
            </a>
          ))}
        </div>

        <a className="btn btn-primary btn-sm" href={getWaLink()} target="_blank" rel="noopener noreferrer">
          <Icon name="wa" size={16} /> Konsultasi Gratis
        </a>
      </div>
    </nav>
  );
}
