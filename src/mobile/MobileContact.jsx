import CONFIG from '../shared/data';
import { getWaLink, getMailLink } from '../shared/utils';
import Icon from '../shared/Icon';

export default function MobileContact() {
  const waUrl = getWaLink();

  return (
    <section id="kontak" style={{ padding: '50px 16px' }}>
      <div className="card reveal" style={{ padding: '32px 20px', textAlign: 'center', maxWidth: 420, margin: '0 auto' }}>
        <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.25rem', fontWeight: 700 }}>
          Masih catat data di buku atau Excel?
        </h2>
        <p style={{ fontSize: '.85rem', color: '#9ba3c4', marginTop: 10, lineHeight: 1.6 }}>
          Ceritakan cara kerja Anda — saya bantu jadi sistem digital yang rapi, aman, dan gampang dipakai. <b style={{ color: '#fff' }}>Konsultasi gratis, tanpa komitmen.</b>
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 22 }}>
          <a className="btn btn-primary" href={waUrl} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
            <Icon name="wa" size={18} /> Chat WhatsApp
          </a>
          <a className="btn btn-ghost" href={getMailLink()} style={{ width: '100%' }}>
            <Icon name="mail" size={16} /> {CONFIG.email}
          </a>
        </div>

        {/* Socials */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 20 }}>
          {CONFIG.socials.map(s => {
            let url = s.url;
            if (s.icon === 'wa' && !url) url = waUrl;
            if (!url) return null;
            return (
              <a key={s.icon} href={url} target="_blank" rel="noopener noreferrer" style={{
                width: 40, height: 40, display: 'grid', placeItems: 'center', borderRadius: 12,
                color: '#cdd3f5', background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.09)',
                textDecoration: 'none', transition: 'transform .2s',
              }}>
                <Icon name={s.icon} size={17} />
              </a>
            );
          })}
        </div>

        <div style={{ marginTop: 14, fontSize: '.75rem', color: '#9ba3c4', display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#cfe7ff', textDecoration: 'none' }}>
            +{CONFIG.whatsapp}
          </a>
          <a href={`mailto:${CONFIG.email}`} style={{ color: '#cfe7ff', textDecoration: 'none' }}>
            {CONFIG.email}
          </a>
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '30px 0 80px', fontSize: '.72rem', color: 'rgba(155,163,196,.7)', lineHeight: 1.8 }}>
        © 2026 {CONFIG.name} · Web · Mobile · DevSecOps<br />
        <a href="https://github.com/tarmizy" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(207,231,255,.85)' }}>github.com/tarmizy</a>
      </footer>
    </section>
  );
}
