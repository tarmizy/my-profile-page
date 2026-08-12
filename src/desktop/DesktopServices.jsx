import Icon from '../shared/Icon';

export default function DesktopServices() {
  const services = [
    {
      icon: 'chart', title: 'Sistem Manajemen & Laporan',
      desc: 'Aplikasi web untuk kelola data harian — pelanggan, santri, tagihan, absensi — dengan dashboard dan laporan siap cetak.',
      bullets: ['Dashboard ringkasan real-time', 'Laporan periodik & export', 'Multi-user dengan hak akses', 'Setup server, domain & deployment'],
    },
    {
      icon: 'smartphone', title: 'Aplikasi Mobile',
      desc: 'Akses dan input data langsung dari HP — admin, pengajar, atau wali santri tanpa perlu komputer.',
      bullets: ['Android & iOS (cross-platform)', 'Terhubung ke sistem web', 'Ringan & mudah dipakai'],
    },
    {
      icon: 'shield', title: 'Keamanan Data',
      desc: 'Perlindungan dipasang dari awal — karena sistem Anda menyimpan data pribadi yang harus aman.',
      bullets: ['Proteksi akses & hardening', 'Backup data otomatis', 'Monitoring & maintenance'],
    },
  ];

  return (
    <section id="layanan" style={{ padding: '72px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-head reveal">
          
          <h2 className="title">Apa yang bisa saya kerjakan untuk Anda</h2>
          <p className="subtitle">Dari perencanaan sampai sistem Anda online, aman, dan benar-benar dipakai tim Anda sehari-hari.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {services.map((s, i) => (
            <div key={i} className="card reveal" style={{ padding: '28px 24px', transition: 'transform .25s, border-color .25s' }}>
              <div style={{
                width: 46, height: 46, borderRadius: 14, display: 'grid', placeItems: 'center',
                background: 'rgba(59,130,246,.16)', border: '1px solid rgba(59,130,246,.35)',
                marginBottom: 16,
              }}>
                <Icon name={s.icon} size={22} />
              </div>
              <h3 style={{ fontFamily: '"Space Grotesk", sans-serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: '.88rem', color: '#9ba3c4', lineHeight: 1.65, marginBottom: 14 }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ fontSize: '.82rem', color: '#dfe4ff', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#6366f1', flexShrink: 0 }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
