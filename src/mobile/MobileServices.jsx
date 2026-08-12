import Icon from '../shared/Icon';

export default function MobileServices() {
  return (
    <section id="layanan" style={{ padding: '50px 16px' }}>
      <div className="section-head reveal">
        
        <h2 className="title">Apa yang saya kerjakan</h2>
        <p className="subtitle">Dari rencana sampai sistem online dan dipakai tim Anda.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 420, margin: '0 auto' }}>
        {[
          {
            icon: 'chart', title: 'Sistem Manajemen & Laporan',
            desc: 'Aplikasi web kelola data harian — pelanggan, santri, tagihan, absensi — lengkap dashboard & laporan siap cetak.',
            bullets: ['Dashboard real-time', 'Laporan & export', 'Multi-user & hak akses', 'Setup server, domain & hosting'],
          },
          {
            icon: 'smartphone', title: 'Aplikasi Mobile',
            desc: 'Biar admin, pengajar, atau wali bisa akses & input data langsung dari HP — tanpa perlu komputer.',
            bullets: ['Android & iOS', 'Terhubung ke sistem web', 'Ringan & mudah dipakai'],
          },
          {
            icon: 'shield', title: 'Keamanan Data',
            desc: 'Keamanan dipasang dari awal — karena sistem Anda menyimpan data pribadi yang harus aman.',
            bullets: ['Proteksi akses', 'Backup otomatis', 'Monitoring 24/7'],
          },
        ].map((s, i) => (
          <div key={i} className="card reveal" style={{ padding: '22px 18px' }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12, display: 'grid', placeItems: 'center',
              background: 'rgba(59,130,246,.16)', border: '1px solid rgba(59,130,246,.35)',
              marginBottom: 12,
            }}>
              <Icon name={s.icon} size={20} />
            </div>
            <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1rem', fontWeight: 700, marginBottom: 6 }}>{s.title}</h3>
            <p style={{ fontSize: '.82rem', color: '#9ba3c4', lineHeight: 1.6, marginBottom: 10 }}>{s.desc}</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {s.bullets.map(b => (
                <li key={b} style={{ fontSize: '.78rem', color: '#dfe4ff', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#6366f1', flexShrink: 0 }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
