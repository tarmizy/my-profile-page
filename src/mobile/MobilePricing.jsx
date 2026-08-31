import CONFIG from '../shared/data';
import { getWaLink } from '../shared/utils';
import Icon from '../shared/Icon';
import { MotionCard, MotionReveal } from '../shared/Motion';

export default function MobilePricing() {
  return (
    <section id="harga" className="page-panel page-panel-pricing" style={{ padding: '50px 16px' }}>
      <MotionReveal className="section-head">
        
        <h2 className="title">Investasi transparan</h2>
        <p className="subtitle">Harga mulai — penawaran final disesuaikan dan <b style={{ color: '#fff' }}>selalu saya sampaikan lengkap sebelum mulai</b>, tanpa biaya tersembunyi.</p>
      </MotionReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 420, margin: '0 auto' }}>
        {CONFIG.pricing.map((pl, i) => (
          <MotionCard key={i} delay={i * 0.08} className={`card pricing-card${pl.featured ? ' pricing-featured' : ''}`} style={{
            padding: '22px 18px', display: 'flex', flexDirection: 'column', minHeight: 470,
            position: 'relative',
            border: pl.featured ? '1px solid rgba(59,130,246,.55)' : undefined,
            boxShadow: pl.featured ? '0 0 0 1px rgba(59,130,246,.22) inset, 0 24px 60px -12px rgba(0,0,0,.65)' : undefined,
          }}>
            {pl.badge && (
              <span style={{
                position: 'absolute', top: -10, right: 16,
                padding: '3px 10px', fontSize: '.6rem', fontWeight: 700,
                color: '#1a1205', background: 'linear-gradient(135deg, #fbbf24, #f97316)',
                borderRadius: 999, boxShadow: '0 4px 12px rgba(251,191,36,.5)',
              }}>
                {pl.badge}
              </span>
            )}
            <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 700 }}>{pl.name}</div>
            <div style={{ fontSize: '.78rem', color: '#9ba3c4', marginTop: 4, lineHeight: 1.5 }}>{pl.desc}</div>
            <div style={{ fontSize: '.68rem', color: '#9ba3c4', marginTop: 14, textTransform: 'uppercase', letterSpacing: '.06em' }}>mulai dari</div>
            <div style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginTop: 2 }}>{pl.price}</div>
            <div style={{ fontSize: '.72rem', color: '#9ba3c4', marginTop: 6, display: 'flex', alignItems: 'center', gap: 5 }}>
              <Icon name="clock" size={12} /> {pl.time}
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7, margin: '14px 0 16px' }}>
              {pl.features.map(f => (
                <li key={f} style={{ display: 'flex', gap: 7, alignItems: 'flex-start', fontSize: '.8rem', color: '#dfe4ff', lineHeight: 1.4 }}>
                  <Icon name="check" size={13} />
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
      <MotionCard className="card" style={{ padding: '18px 16px', maxWidth: 420, margin: '16px auto 0' }}>
        <h4 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '.88rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 7, marginBottom: 12 }}>
          <Icon name="clock" size={15} /> Layanan tambahan
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {CONFIG.addons.map(a => (
            <span key={a.label} style={{ fontSize: '.73rem', padding: '6px 10px', borderRadius: 999, background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', color: '#dfe4ff' }}>
              {a.label} · <b style={{ color: '#fff', fontWeight: 600 }}>{a.price}</b>
            </span>
          ))}
        </div>
      </MotionCard>

      <p className="reveal" style={{ textAlign: 'center', marginTop: 20, fontSize: '.8rem', color: '#9ba3c4', lineHeight: 1.6, maxWidth: 380, margin: '20px auto 0' }}>
        Budget terbatas? Sistem bisa <b style={{ color: '#fff' }}>dibangun bertahap per modul</b> — mulai yang paling mendesak dulu.
      </p>
    </section>
  );
}
