import CONFIG from '../shared/data';
import { getWaLink } from '../shared/utils';
import Icon from '../shared/Icon';
import { MotionCard, MotionReveal } from '../shared/Motion';

export default function DesktopPricing() {
  return (
    <section id="harga" className="page-panel page-panel-pricing" style={{ padding: '72px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <MotionReveal className="section-head">
          
          <h2 className="title">Investasi yang transparan sejak awal</h2>
          <p className="subtitle">Harga mulai — penawaran final menyesuaikan jumlah modul dan kerumitan, <b style={{ color: '#fff' }}>selalu disampaikan lengkap sebelum mulai</b>.</p>
        </MotionReveal>

        <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, alignItems: 'stretch' }}>
          {CONFIG.pricing.map((pl, i) => (
            <MotionCard key={i} delay={i * 0.08} className={`card pricing-card${pl.featured ? ' pricing-featured' : ''}`} style={{
              padding: '28px 24px', position: 'relative', display: 'flex', flexDirection: 'column',
              border: pl.featured ? '1px solid rgba(59,130,246,.55)' : undefined,
              boxShadow: pl.featured ? '0 0 0 1px rgba(59,130,246,.22) inset, 0 24px 60px -12px rgba(0,0,0,.65)' : undefined,
            }}>
              {pl.badge && (
                <span style={{
                  position: 'absolute', top: -12, right: 20,
                  padding: '4px 12px', fontSize: '.65rem', fontWeight: 700,
                  letterSpacing: '.04em', color: '#1a1205',
                  background: 'linear-gradient(135deg, #fbbf24, #f97316)',
                  borderRadius: 999, boxShadow: '0 4px 12px rgba(251,191,36,.5)',
                }}>
                  {pl.badge}
                </span>
              )}
              <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.05rem', fontWeight: 700 }}>{pl.name}</div>
              <div style={{ fontSize: '.82rem', color: '#9ba3c4', marginTop: 6, lineHeight: 1.6, minHeight: 42 }}>{pl.desc}</div>
              <div style={{ marginTop: 18, fontSize: '.72rem', color: '#9ba3c4', textTransform: 'uppercase', letterSpacing: '.06em' }}>mulai dari</div>
              <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginTop: 2 }}>{pl.price}</div>
              <div style={{ fontSize: '.76rem', color: '#9ba3c4', marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Icon name="clock" size={13} /> {pl.time}
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, margin: '18px 0 22px', flex: 1 }}>
                {pl.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: '.85rem', color: '#dfe4ff', lineHeight: 1.5 }}>
                    <Icon name="check" size={14} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                className={`btn btn-sm ${pl.featured ? 'btn-primary' : 'btn-ghost'}`}
                href={getWaLink(`Halo Codday996 Solutions, saya tertarik paket "${pl.name}". Boleh minta detailnya?`)}
                target="_blank" rel="noopener noreferrer"
                style={{ width: '100%' }}
              >
                Minta Penawaran
              </a>
            </MotionCard>
          ))}
        </div>

        {/* Add-ons */}
        <MotionCard className="card" style={{ padding: '22px 24px', marginTop: 30 }}>
          <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 9 }}>
            <Icon name="clock" size={16} /> Layanan tambahan
          </h4>
          <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 9 }}>
            {CONFIG.addons.map(a => (
              <span key={a.label} style={{ fontSize: '.78rem', padding: '7px 13px', borderRadius: 999, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', color: '#dfe4ff' }}>
                {a.label} · <b style={{ color: '#fff', fontWeight: 600 }}>{a.price}</b>
              </span>
            ))}
          </div>
        </MotionCard>

        <p className="reveal" style={{ textAlign: 'center', marginTop: 24, fontSize: '.84rem', color: '#9ba3c4', lineHeight: 1.7 }}>
          Budget terbatas? Sistem bisa <b style={{ color: '#fff' }}>dibangun bertahap per modul</b> — mulai dari yang paling mendesak dulu.
        </p>
      </div>
    </section>
  );
}
