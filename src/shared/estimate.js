// Angka simulasi dapat disesuaikan dengan kebijakan harga layanan.
// Semua nominal adalah estimasi awal, bukan penawaran final.
export const PROJECT_TYPES = [
  { id: 'website', name: 'Website & landing page', caption: 'Profil bisnis, katalog, promosi', icon: 'globe', base: 2500000, weeks: [1, 2] },
  { id: 'webapp', name: 'Web app & dashboard', caption: 'Sistem operasional & admin', icon: 'chart', base: 5000000, weeks: [3, 6] },
  { id: 'mobile', name: 'Mobile / PWA custom', caption: 'Aplikasi lintas perangkat', icon: 'smartphone', base: 10000000, weeks: [6, 10] },
];

export const COMPLEXITIES = [
  { id: 'basic', name: 'Esensial', caption: 'Fitur inti untuk mulai', multiplier: 1 },
  { id: 'standard', name: 'Berkembang', caption: 'Lebih banyak alur & halaman', multiplier: 1.45 },
  { id: 'advanced', name: 'Kompleks', caption: 'Kebutuhan lebih mendalam', multiplier: 2.1 },
];

export const ESTIMATE_FEATURES = [
  { id: 'roles', name: 'Login & hak akses pengguna', price: 1250000 },
  { id: 'dashboard', name: 'Dashboard & statistik', price: 1000000 },
  { id: 'reports', name: 'Laporan / ekspor PDF & Excel', price: 750000 },
  { id: 'payment', name: 'Pembayaran online', price: 1750000 },
  { id: 'integrations', name: 'Integrasi API pihak ketiga', price: 1500000 },
  { id: 'notifications', name: 'Notifikasi otomatis', price: 600000 },
];

export const money = (amount) => new Intl.NumberFormat('id-ID', {
  style: 'currency', currency: 'IDR', maximumFractionDigits: 0,
}).format(amount);

const roundQuarter = (amount) => Math.round(amount / 250000) * 250000;

export function calculateEstimate({ type = 'webapp', complexity = 'basic', features = [], rush = false } = {}) {
  const project = PROJECT_TYPES.find(item => item.id === type) || PROJECT_TYPES[1];
  const scope = COMPLEXITIES.find(item => item.id === complexity) || COMPLEXITIES[0];
  const uniqueFeatures = [...new Set(features)];
  const chosenFeatures = ESTIMATE_FEATURES.filter(item => uniqueFeatures.includes(item.id));
  const scopeFee = roundQuarter(project.base * (scope.multiplier - 1));
  const featuresFee = chosenFeatures.reduce((sum, item) => sum + item.price, 0);
  const subtotal = project.base + scopeFee + featuresFee;
  const rushFee = rush ? roundQuarter(subtotal * .2) : 0;
  const total = subtotal + rushFee;
  const min = roundQuarter(total * .85);
  const max = roundQuarter(total * 1.2);
  const weeksFactor = scope.id === 'advanced' ? 1.65 : scope.id === 'standard' ? 1.25 : 1;
  const featureWeeks = Math.ceil(chosenFeatures.length / 3);
  const durationMin = Math.max(1, Math.ceil((project.weeks[0] * weeksFactor + featureWeeks) * (rush ? .8 : 1)));
  const durationMax = Math.max(durationMin, Math.ceil((project.weeks[1] * weeksFactor + featureWeeks) * (rush ? .8 : 1)));

  return { project, scope, chosenFeatures, scopeFee, featuresFee, subtotal, rushFee, total, min, max, durationMin, durationMax };
}

export function createEstimateMessage(estimate, notes = '') {
  const featureList = estimate.chosenFeatures.length
    ? estimate.chosenFeatures.map(item => '- ' + item.name).join('\n')
    : '- Fitur standar sesuai jenis proyek';
  const details = notes.trim().slice(0, 600);
  return [
    'Halo Codday996 Solutions, saya ingin konsultasi proyek.',
    '',
    '*Ringkasan dari kalkulator estimasi*',
    'Jenis: ' + estimate.project.name,
    'Skala: ' + estimate.scope.name,
    'Fitur tambahan:\n' + featureList,
    'Pengerjaan prioritas: ' + (estimate.rushFee ? 'Ya' : 'Tidak'),
    'Estimasi biaya: ' + money(estimate.min) + ' – ' + money(estimate.max),
    'Perkiraan waktu: ' + estimate.durationMin + '–' + estimate.durationMax + ' minggu',
    ...(details ? ['', 'Kebutuhan saya: ' + details] : []),
    '',
    'Boleh dibantu diskusi scope dan penawaran final?',
  ].join('\n');
}
