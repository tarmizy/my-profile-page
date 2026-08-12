import CONFIG from '../shared/data';
import { getWaLink, getMailLink } from '../shared/utils';
import Icon from '../shared/Icon';

export default function DesktopContact() {
  const waUrl = getWaLink();

  return (
    <section id="kontak" style={{ padding: '72px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="card reveal" style={{ padding: '50px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.4rem, 4vw, 2rem)', fontWeight: 700 }}>
            Masih catat data di buku atau Excel?
          </h2>
          <p style={{ marginTop: 12, color: '#9ba3c4', maxWidth: 520, margin: '12px auto 0', lineHeight: 1.7 }}>
            Ceritakan cara kerja Anda — saya bantu ubah jadi sistem digital yang rapi, aman, dan gampang dipakai semua tim. <b style={{ color: '#fff' }}>Konsultasi awal gratis, tanpa komitmen.</b>
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 30, flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href={waUrl} target="_blank" rel="noopener noreferrer">
              <Icon name="wa" size={18} /> Chat WhatsApp Sekarang
            </a>
            <a className="btn btn-ghost" href={getMailLink()}>
              <Icon name="mail" size={16} /> Kirim Email
            </a>
          </div>

          <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 20, fontSize: '.84rem', color: '#9ba3c4', flexWrap: 'wrap' }}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#cfe7ff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="wa" size={14} /> +{CONFIG.whatsapp}
            </a>
            <a href={`mailto:${CONFIG.email}`} style={{ color: '#cfe7ff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon name="mail" size={14} /> {CONFIG.email}
            </a>
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 24 }}>
            {CONFIG.socials.map(s => {
              let url = s.url;
              if (s.icon === 'wa' && !url) url = waUrl;
              if (!url) return null;
              return (
                <a key={s.icon} href={url} target="_blank" rel="noopener noreferrer" style={{
                  width: 44, height: 44, display: 'grid', placeItems: 'center', borderRadius: 13,
                  color: '#cdd3f5', background: 'rgba(255,255,255,.05)',
                  border: '1px solid rgba(255,255,255,.09)',
                  textDecoration: 'none', transition: 'transform .2s cubic-bezier(.34,1.56,.64,1)',
                }}>
                  <Icon name={s.icon} size={19} />
                </a>
              );
            })}
          </div>
        </div>

        <footer style={{ padding: '28px 0 40px', textAlign: 'center', fontSize: '.76rem', color: 'rgba(155,163,196,.7)', lineHeight: 1.8 }}>
          © 2026 {CONFIG.name} · Web · Mobile · DevSecOps<br />
          <a href="https://github.com/tarmizy" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(207,231,255,.85)' }}>
            github.com/tarmizy
          </a>
        </footer>
      </div>
    </section>
  );
}
