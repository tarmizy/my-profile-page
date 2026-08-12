import Icon from '../shared/Icon';

export default function DesktopFeatures() {
  const features = [
    { icon: 'chart', title: 'Dashboard Ringkasan', desc: 'Angka penting terlihat begitu login.' },
    { icon: 'report', title: 'Laporan & Cetak', desc: 'Rekap periodik, siap print atau export.' },
    { icon: 'users', title: 'Multi-User', desc: 'Hak akses beda tiap peran/jabatan.' },
    { icon: 'search', title: 'Cari & Filter', desc: 'Temukan data dalam hitungan detik.' },
    { icon: 'database', title: 'Backup Data', desc: 'Data aman, tidak hilang begitu saja.' },
    { icon: 'smartphone', title: 'Mobile Friendly', desc: 'Enak dipakai dari HP tanpa aplikasi.' },
    { icon: 'lock', title: 'Login Aman', desc: 'Data pribadi tidak bisa diakses publik.' },
    { icon: 'training', title: 'Training Pemakaian', desc: 'Tim Anda diajari sampai bisa.' },
  ];

  return (
    <section id="fitur" style={{ padding: '72px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div className="section-head reveal">
          
          <h2 className="title">Yang selalu ada di setiap sistem saya</h2>
          <p className="subtitle">Anda tidak perlu memintanya satu per satu — ini sudah jadi bagian dari cara saya bekerja.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {features.map((f, i) => (
            <div key={i} className="card reveal" style={{ padding: '20px 16px', textAlign: 'center' }}>
              <div style={{
                width: 42, height: 42, borderRadius: 12, display: 'grid', placeItems: 'center',
                background: 'rgba(59,130,246,.14)', border: '1px solid rgba(59,130,246,.3)',
                margin: '0 auto',
              }}>
                <Icon name={f.icon} size={20} />
              </div>
              <h4 style={{ marginTop: 12, fontSize: '.87rem', fontWeight: 700 }}>{f.title}</h4>
              <p style={{ marginTop: 5, fontSize: '.76rem', color: '#9ba3c4', lineHeight: 1.55 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
