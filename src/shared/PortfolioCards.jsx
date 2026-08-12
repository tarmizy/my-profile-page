import { useState } from 'react';
import CONFIG from '../shared/data';
import { getWaLink } from '../shared/utils';
import Icon from '../shared/Icon';

export function PortfolioModal({ project, onClose }) {
  const waLink = getWaLink(`Halo Codday996 Solutions, saya tertarik dengan sistem seperti ${project.name}. Boleh diskusi?`);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(5,5,15,.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
        padding: 0,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'rgba(20,20,40,.95)',
          border: '1px solid rgba(255,255,255,.12)',
          borderRadius: '22px 22px 0 0',
          maxWidth: 520, width: '100%',
          maxHeight: '85vh', overflowY: 'auto',
          padding: '26px 20px 30px',
          boxShadow: '0 30px 60px -12px rgba(0,0,0,.8)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: '.66rem', fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase',
              color: '#dbeafe', background: 'rgba(59,130,246,.14)',
              border: '1px solid rgba(59,130,246,.35)',
              padding: '4px 10px', borderRadius: 999,
            }}>
              {project.tag}
            </span>
            <h3 style={{ marginTop: 10, fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.4rem', fontWeight: 700 }}>
              {project.name}
            </h3>
            <p style={{ fontSize: '.82rem', color: '#cfe7ff', fontWeight: 500, marginTop: 4 }}>{project.for}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            style={{
              background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)',
              color: '#fff', width: 34, height: 34, borderRadius: '50%',
              cursor: 'pointer', fontSize: '1rem', display: 'grid', placeItems: 'center',
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>

        {/* Screenshots */}
        {project.shotDesktop && (
          <div style={{
            borderRadius: 12, overflow: 'hidden', marginBottom: 14,
            border: '1px solid rgba(255,255,255,.1)',
            boxShadow: '0 16px 40px -12px rgba(0,0,0,.7)',
          }}>
            <img src={project.shotDesktop} alt={`${project.name} desktop`} loading="lazy"
              style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        )}
        {project.shotMobile && (
          <div style={{
            borderRadius: 12, overflow: 'hidden', marginBottom: 14,
            border: '1px solid rgba(255,255,255,.1)',
            boxShadow: '0 16px 40px -12px rgba(0,0,0,.7)',
          }}>
            <img src={project.shotMobile} alt={`${project.name} mobile`} loading="lazy"
              style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        )}

        {/* Problem */}
        <div style={{
          background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.08)',
          borderRadius: 12, padding: '14px 16px', marginBottom: 12,
        }}>
          <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: '#9ba3c4', marginBottom: 4 }}>
            Masalah
          </div>
          <p style={{ fontSize: '.86rem', color: '#dfe4ff', lineHeight: 1.6 }}>{project.problem}</p>
        </div>

        {/* Solution */}
        <div style={{
          background: 'rgba(59,130,246,.08)', border: '1px solid rgba(59,130,246,.25)',
          borderRadius: 12, padding: '14px 16px', marginBottom: 18,
        }}>
          <div style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: '#38bdf8', marginBottom: 4 }}>
            Solusinya
          </div>
          <p style={{ fontSize: '.86rem', color: '#eef2ff', lineHeight: 1.6 }}>{project.solution}</p>
        </div>

        {/* Features */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 14px', marginBottom: 20 }}>
          {project.features.map(f => (
            <div key={f} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', fontSize: '.8rem', color: '#dfe4ff', lineHeight: 1.4 }}>
              <Icon name="check" size={13} />
              <span>{f}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <a className="btn btn-primary" href={project.url} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
            <Icon name="ext" size={15} /> Buka Live Demo
          </a>
          <a className="btn btn-ghost" href={waLink} target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
            <Icon name="wa" size={16} /> Saya mau sistem seperti ini
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioCards({ isMobile = true }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: isMobile ? 12 : 18,
        maxWidth: isMobile ? 420 : 1100,
        margin: '0 auto',
      }}>
        {CONFIG.projects.map((p, i) => (
          <div key={i} className="card reveal" style={{
            padding: 0, overflow: 'hidden', cursor: 'pointer',
            transition: 'transform .25s, border-color .25s',
          }}>
            {/* Screenshot / fallback */}
            <div style={{
              aspectRatio: '16/10', background: '#0a0a1a',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', position: 'relative',
            }}>
              {p.shotDesktop ? (
                <img src={p.shotDesktop} alt={p.name} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  background: `linear-gradient(135deg, ${p.accent}18, ${p.accent}08)`,
                  display: 'grid', placeItems: 'center',
                }}>
                  <div style={{ color: p.accent, fontSize: '1.3rem', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, opacity: .35 }}>
                    {p.name}
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div style={{ padding: '16px 16px 18px' }}>
              <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: 2 }}>
                {p.name}
              </h3>
              <p style={{ fontSize: '.78rem', color: '#cfe7ff', fontWeight: 500, marginBottom: 8 }}>{p.for}</p>
              <p style={{ fontSize: '.82rem', color: '#9ba3c4', lineHeight: 1.6, marginBottom: 14 }}>{p.shortDesc}</p>

              <div style={{ display: 'flex', gap: 8 }}>
                <button
                  onClick={() => setSelected(p)}
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1 }}
                >
                  Lihat Detail
                </button>
                <a
                  className="btn btn-ghost btn-sm"
                  href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ flex: 1 }}
                >
                  <Icon name="ext" size={13} /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && <PortfolioModal project={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
