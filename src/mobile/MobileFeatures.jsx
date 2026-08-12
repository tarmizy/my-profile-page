import Icon from '../shared/Icon';

export default function MobileFeatures() {
  const features = [
    { icon: 'chart', title: 'Dashboard', desc: 'Angka penting terlihat begitu login.' },
    { icon: 'report', title: 'Laporan Cetak', desc: 'Rekap periodik, siap print atau export.' },
    { icon: 'users', title: 'Multi-User', desc: 'Hak akses beda tiap peran.' },
    { icon: 'search', title: 'Cari & Filter', desc: 'Temukan data dalam hitungan detik.' },
    { icon: 'database', title: 'Backup Data', desc: 'Data aman, tidak hilang.' },
    { icon: 'smartphone', title: 'Mobile Friendly', desc: 'Enak dipakai dari HP.' },
    { icon: 'lock', title: 'Login Aman', desc: 'Data tidak bisa diakses publik.' },
    { icon: 'training', title: 'Training Tim', desc: 'Diajari sampai semua bisa.' },
  ];

  return (
    <section id="fitur" style={{ padding: '50px 16px' }}>
      <div className="section-head reveal">
        
        <h2 className="title">Selalu ada di setiap sistem</h2>
        <p className="subtitle">Anda tidak perlu minta satu per satu — ini sudah standar cara saya bekerja.</p>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8,
        maxWidth: 420, margin: '0 auto',
      }}>
        {features.map((f, i) => (
          <div key={i} className="card reveal" style={{ padding: '16px 12px', textAlign: 'center' }}>
            <div style={{
              width: 32, height: 32, borderRadius: 10, display: 'grid', placeItems: 'center',
              background: 'rgba(59,130,246,.14)', border: '1px solid rgba(59,130,246,.3)',
              margin: '0 auto 8px',
            }}>
              <Icon name={f.icon} size={16} />
            </div>
            <h4 style={{ fontSize: '.8rem', fontWeight: 700, marginBottom: 3 }}>{f.title}</h4>
            <p style={{ fontSize: '.7rem', color: '#9ba3c4', lineHeight: 1.4 }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
