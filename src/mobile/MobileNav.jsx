import CONFIG from '../shared/data';
import { getWaLink, getMailLink } from '../shared/utils';
import Icon from '../shared/Icon';

export default function MobileNav() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      backdropFilter: 'blur(14px) saturate(1.3)',
      WebkitBackdropFilter: 'blur(14px) saturate(1.3)',
      background: 'rgba(5,5,15,.75)',
      borderBottom: '1px solid rgba(255,255,255,.1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, padding: '0 16px', maxWidth: 480, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, fontSize: '.95rem' }}>
          <img src="/logo.png" alt={CONFIG.name} style={{ width: 28, height: 28, borderRadius: 6 }} />
          {CONFIG.name}
        </div>
        <a
          className="btn btn-primary btn-sm"
          href={getWaLink()}
          target="_blank" rel="noopener noreferrer"
          style={{ padding: '8px 14px', fontSize: '.8rem' }}
        >
          <Icon name="wa" size={16} /> Konsultasi
        </a>
      </div>
    </nav>
  );
}
