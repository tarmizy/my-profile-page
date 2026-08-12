import CONFIG from '../shared/data';
import { getWaLink, getHost } from '../shared/utils';
import Icon from '../shared/Icon';

export default function DesktopPortfolio() {
  return (
    <section id="portfolio" style={{ padding: '72px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-head reveal">
          
          <h2 className="title">Sistem yang sudah saya bangun & jalan</h2>
          <p className="subtitle">Bukan konsep — ketiganya sudah online dan bisa Anda buka sendiri sekarang.</p>
        </div>

        {CONFIG.projects.map((p, i) => {
          const host = getHost(p.url);
          return (
            <div key={i} className="reveal" style={{
              display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: 48, alignItems: 'center',
              marginBottom: 66,
            }}>
              {/* Device mockup */}
              <div style={{ order: i % 2 !== 0 ? 2 : 1, position: 'relative', padding: '0 24px 36px 0' }}>
                {/* Desktop mock */}
                <div style={{
                  borderRadius: 12, overflow: 'hidden', background: '#080814',
                  border: '1px solid rgba(255,255,255,.14)',
                  boxShadow: '0 30px 60px -22px rgba(0,0,0,.85)',
                  transition: 'transform .35s cubic-bezier(.22,1,.36,1)',
                }}>
                  <div style={{
                    height: 27, display: 'flex', alignItems: 'center', gap: 5, padding: '0 11px',
                    background: 'rgba(255,255,255,.07)', borderBottom: '1px solid rgba(255,255,255,.08)',
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,.2)' }} />
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,.2)' }} />
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'rgba(255,255,255,.2)' }} />
                    <span style={{
                      marginLeft: 9, flex: 1, maxWidth: '62%', height: 13, borderRadius: 999,
                      background: 'rgba(255,255,255,.08)', fontSize: '.55rem', color: 'rgba(255,255,255,.45)',
                      padding: '0 8px', display: 'flex', alignItems: 'center', overflow: 'hidden',
                    }}>
                      {host}
                    </span>
                  </div>
                  <div style={{
                    aspectRatio: '16/10', background: '#0a0a1a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    {p.shotDesktop ? (
                      <img src={p.shotDesktop} alt={`${p.name} desktop`} loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                    ) : (
                      <div style={{
                        width: '100%', height: '100%',
                        background: `linear-gradient(135deg, ${p.accent}18, ${p.accent}08)`,
                        display: 'grid', placeItems: 'center',
                      }}>
                        <div style={{ color: p.accent, fontSize: '1.5rem', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, opacity: .3 }}>
                          {p.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile mock */}
                <div style={{
                  position: 'absolute', right: 0, bottom: 0, width: 96,
                  borderRadius: 15, overflow: 'hidden', background: '#080814',
                  border: '3px solid rgba(255,255,255,.17)',
                  boxShadow: '0 20px 38px -12px rgba(0,0,0,.92)',
                  transition: 'transform .35s cubic-bezier(.22,1,.36,1)',
                }}>
                  <div style={{
                    position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)',
                    width: 26, height: 3, borderRadius: 999, background: 'rgba(255,255,255,.25)', zIndex: 3,
                  }} />
                  <div style={{
                    aspectRatio: '9/17.5', background: '#0a0a1a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    {p.shotMobile ? (
                      <img src={p.shotMobile} alt={`${p.name} mobile`} loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                    ) : (
                      <div style={{
                        width: '100%', height: '100%',
                        background: `linear-gradient(180deg, ${p.accent}18, ${p.accent}08)`,
                        display: 'grid', placeItems: 'center',
                      }}>
                        <div style={{ color: p.accent, fontSize: '.7rem', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, opacity: .3, writingMode: 'vertical-rl' }}>
                          {p.name}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div style={{ order: i % 2 !== 0 ? 1 : 2 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7,
                  fontSize: '.69rem', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase',
                  color: '#cfe7ff', background: 'rgba(255,255,255,.07)',
                  border: '1px solid rgba(255,255,255,.1)',
                  padding: '5px 12px', borderRadius: 999,
                }}>
                  {p.tag}
                </span>
                <h3 style={{ marginTop: 14, fontFamily: '"Space Grotesk", sans-serif', fontSize: 'clamp(1.25rem, 3.4vw, 1.6rem)', fontWeight: 700, letterSpacing: '-.02em' }}>
                  {p.name}
                </h3>
                <p style={{ marginTop: 6, fontSize: '.84rem', color: '#cfe7ff', fontWeight: 500 }}>{p.for}</p>
                <p style={{ marginTop: 12, fontSize: '.93rem', color: '#9ba3c4', lineHeight: 1.75 }}>{p.desc}</p>

                <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px 16px' }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: '.855rem', color: '#dfe4ff', lineHeight: 1.5 }}>
                      <Icon name="check" size={13} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
                  {p.stack.map(s => (
                    <span key={s} style={{ fontSize: '.69rem', padding: '4px 10px', borderRadius: 999, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', color: '#9ba3c4' }}>
                      {s}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
                  <a className="btn btn-primary btn-sm" href={p.url} target="_blank" rel="noopener noreferrer">
                    <Icon name="ext" size={14} /> Buka Live Demo
                  </a>
                  <a
                    className="btn btn-ghost btn-sm"
                    href={getWaLink(`Halo Codday996 Solutions, saya tertarik dengan sistem seperti ${p.name}. Boleh diskusi?`)}
                    target="_blank" rel="noopener noreferrer"
                  >
                    Saya mau yang seperti ini
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
