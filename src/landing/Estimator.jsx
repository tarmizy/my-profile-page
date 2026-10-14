import { useMemo, useState } from 'react';
import Icon from '../shared/Icon';
import { getWaLink } from '../shared/utils';
import {
  PROJECT_TYPES, COMPLEXITIES, ESTIMATE_FEATURES,
  calculateEstimate, createEstimateMessage, money,
} from '../shared/estimate';

export default function Estimator() {
  const [type, setType] = useState('webapp');
  const [complexity, setComplexity] = useState('basic');
  const [features, setFeatures] = useState([]);
  const [rush, setRush] = useState(false);
  const [notes, setNotes] = useState('');
  const estimate = useMemo(
    () => calculateEstimate({ type, complexity, features, rush }),
    [type, complexity, features, rush],
  );

  const toggleFeature = (id) => {
    setFeatures((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]);
  };

  const reset = () => {
    setType('webapp');
    setComplexity('basic');
    setFeatures([]);
    setRush(false);
    setNotes('');
  };

  const waLink = getWaLink(createEstimateMessage(estimate, notes));

  return (
    <section className="section estimate-section" id="kalkulator" aria-labelledby="estimate-title">
      <div className="container">
        <div className="section-heading estimate-heading">
          <div>
            <span className="eyebrow"><span className="eyebrow-line" /> SIMULASI BIAYA PROJECT</span>
            <h2 id="estimate-title">Hitung gambaran budget <em>tanpa menunggu balasan.</em></h2>
          </div>
          <p>Pilih jenis aplikasi dan kebutuhan Anda. Rinciannya otomatis berubah, lalu kirim ke WhatsApp untuk diskusi lebih lanjut.</p>
        </div>

        <div className="estimator-grid">
          <div className="estimator-builder">
            <div className="builder-heading"><span className="step-index">01</span><div><h3>Jenis proyek</h3><p>Apa yang ingin Anda bangun?</p></div></div>
            <div className="type-grid" role="group" aria-label="Pilih jenis proyek">
              {PROJECT_TYPES.map(item => (
                <button key={item.id} type="button" className={'option-card' + (type === item.id ? ' is-selected' : '')} aria-pressed={type === item.id} onClick={() => setType(item.id)}>
                  <span className="option-icon"><Icon name={item.icon} size={22} /></span>
                  <strong>{item.name}</strong>
                  <span>{item.caption}</span>
                  <small>Mulai {money(item.base)}</small>
                </button>
              ))}
            </div>

            <div className="builder-heading"><span className="step-index">02</span><div><h3>Skala kebutuhan</h3><p>Seberapa luas sistem yang dibutuhkan?</p></div></div>
            <div className="scope-grid" role="group" aria-label="Pilih skala proyek">
              {COMPLEXITIES.map(item => (
                <button key={item.id} type="button" className={'scope-card' + (complexity === item.id ? ' is-selected' : '')} aria-pressed={complexity === item.id} onClick={() => setComplexity(item.id)}>
                  <span className="radio-dot" aria-hidden="true" />
                  <strong>{item.name}</strong>
                  <small>{item.caption}</small>
                </button>
              ))}
            </div>

            <div className="builder-heading"><span className="step-index">03</span><div><h3>Fitur tambahan</h3><p>Centang sesuai kebutuhan. Boleh lebih dari satu.</p></div></div>
            <div className="features-grid">
              {ESTIMATE_FEATURES.map(item => (
                <label key={item.id} className={'feature-option' + (features.includes(item.id) ? ' is-selected' : '')}>
                  <input type="checkbox" checked={features.includes(item.id)} onChange={() => toggleFeature(item.id)} />
                  <span className="fake-checkbox"><Icon name="check" size={13} /></span>
                  <span className="feature-text"><strong>{item.name}</strong><small>+ {money(item.price)}</small></span>
                </label>
              ))}
            </div>

            <label className="rush-option">
              <input type="checkbox" checked={rush} onChange={(event) => setRush(event.target.checked)} />
              <span className="fake-checkbox"><Icon name="check" size={13} /></span>
              <span><strong>Prioritas pengerjaan</strong><small>Percepatan jadwal jika kapasitas tersedia (+20% simulasi)</small></span>
            </label>

            <div className="builder-footer">
              <label htmlFor="project-brief">Ceritakan kebutuhan Anda <span>(opsional)</span></label>
              <textarea id="project-brief" rows="3" maxLength="600" value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Contoh: Sistem stok dan penjualan untuk 2 cabang, ada laporan bulanan..." />
              <button type="button" className="text-button" onClick={reset}>↺ Ulangi pilihan</button>
            </div>
          </div>

          <aside className="estimate-result" aria-label="Hasil perhitungan estimasi">
            <div className="estimate-result-inner">
              <div className="result-topline"><span><span className="result-pulse" /> ESTIMASI REAL-TIME</span><Icon name="chart" size={19} /></div>
              <p className="result-kicker">Rentang investasi awal</p>
              <div className="result-price" aria-live="polite" aria-atomic="true">
                <strong>{money(estimate.min)}</strong>
                <span>hingga {money(estimate.max)}</span>
              </div>
              <p className="result-explainer">Perkiraan, bukan harga final. Penawaran resmi dibuat setelah scope disepakati.</p>
              <div className="result-divider" />
              <h3>Rincian simulasi</h3>
              <dl className="result-breakdown">
                <div><dt>{estimate.project.name}</dt><dd>{money(estimate.project.base)}</dd></div>
                <div><dt>Penyesuaian skala ({estimate.scope.name})</dt><dd>{money(estimate.scopeFee)}</dd></div>
                <div><dt>Fitur tambahan ({estimate.chosenFeatures.length})</dt><dd>{money(estimate.featuresFee)}</dd></div>
                {rush && <div><dt>Prioritas pengerjaan</dt><dd>{money(estimate.rushFee)}</dd></div>}
              </dl>
              <div className="result-subtotal"><span>Nilai tengah simulasi</span><strong>{money(estimate.total)}</strong></div>
              <div className="result-timeline"><Icon name="clock" size={18} /><span>Estimasi pengerjaan</span><strong>{estimate.durationMin}–{estimate.durationMax} minggu</strong></div>
              <a className="button button-primary result-cta" href={waLink} target="_blank" rel="noopener noreferrer">
                <Icon name="wa" size={18} /> Diskusikan estimasi ini <span aria-hidden="true">↗</span>
              </a>
              <p className="result-note">Rincian pilihan ikut terkirim ke WhatsApp. Belum termasuk biaya domain, hosting, layanan pihak ketiga, dan pajak jika berlaku.</p>
              <div className="result-bottom"><Icon name="shield" size={16} /> Tidak perlu daftar akun atau mengisi data pribadi.</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
