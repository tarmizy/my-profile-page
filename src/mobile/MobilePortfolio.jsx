import CONFIG from '../shared/data';
import { getWaLink } from '../shared/utils';
import Icon from '../shared/Icon';

export default function MobilePortfolio() {
  return (
    <section id="portfolio" style={{ padding: '50px 16px' }}>
      <div className="section-head reveal">
        
        <h2 className="title">Sistem yang sudah jalan</h2>
        <p className="subtitle">Bukan konsep — ketiganya online dan bisa Anda buka sekarang.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 420, margin: '0 auto' }}>
        {CONFIG.projects.map((p, i) => (
          <div key={i} className="card reveal" style={{ padding: '20px 16px', overflow: 'hidden' }}>
            {/* Tag */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: '.66rem', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase',
              color: '#cfe7ff', background: 'rgba(255,255,255,.07)',
              border: '1px solid rgba(255,255,255,.1)',
              padding: '4px 10px', borderRadius: 999, marginBottom: 12,
            }}>
              {p.tag}
            </span>

            <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.15rem', fontWeight: 700, marginBottom: 4 }}>{p.name}</h3>
            <p style={{ fontSize: '.78rem', color: '#cfe7ff', fontWeight: 500, marginBottom: 10 }}>{p.for}</p>

            {/* Screenshot */}
            {p.shotMobile && (
              <div style={{
                borderRadius: 10, overflow: 'hidden', marginBottom: 14,
                border: '1px solid rgba(255,255,255,.1)',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,.5)',
              }}>
                <img src={p.shotMobile} alt={`${p.name} mobile`} loading="lazy"
                  style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
              </div>
            )}

            <p style={{ fontSize: '.82rem', color: '#9ba3c4', lineHeight: 1.65, marginBottom: 14 }}>{p.desc}</p>

            {/* Features grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 12px', marginBottom: 14 }}>
              {p.features.map(f => (
                <div key={f} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', fontSize: '.75rem', color: '#dfe4ff', lineHeight: 1.4 }}>
                  <Icon name="check" size={13} />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            {/* Stack pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
              {p.stack.map(s => (
                <span key={s} style={{ fontSize: '.65rem', padding: '3px 8px', borderRadius: 999, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', color: '#9ba3c4' }}>{s}</span>
              ))}
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a className="btn btn-primary btn-sm" href={p.url} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                <Icon name="ext" size={14} /> Buka Live Demo
              </a>
              <a
                className="btn btn-ghost btn-sm"
                href={getWaLink(`Halo Codday996 Solutions, saya tertarik dengan sistem seperti ${p.name}. Bisa diskusi?`)}
                target="_blank" rel="noopener noreferrer"
                style={{ width: '100%' }}
              >
                Saya mau yang seperti ini
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
