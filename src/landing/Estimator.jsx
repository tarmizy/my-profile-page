import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
  const reduce = useReducedMotion();
  const estimate = useMemo(() => calculateEstimate({ type, complexity, features, rush }),
    [type, complexity, features, rush]);
  const toggle = (id) => setFeatures(items => items.includes(id)
    ? items.filter(item => item !== id) : [...items, id]);
  const reset = () => { setType('webapp'); setComplexity('basic'); setFeatures([]); setRush(false); setNotes(''); };
  const message = createEstimateMessage(estimate, notes);

  return (
    <section className="studio-estimator studio-section" id="estimasi" aria-labelledby="estimate-title">
      <div className="studio-shell">
        <div className="studio-section-heading studio-estimator-title">
          <div><p className="studio-kicker"><span className="studio-kicker-line" /> 04 — PROJECT ESTIMATOR</p>
            <h2 id="estimate-title">Budget lebih jelas, <em>sebelum mulai.</em></h2>
          </div>
          <p className="studio-section-intro">Tak perlu menebak-nebak. Pilih kebutuhan proyek untuk melihat rentang biaya dan waktu secara langsung.</p>
        </div>
        <div className="studio-calculator">
          <div className="studio-calculator-form">
            <div className="studio-calc-intro"><span>PROJECT CONFIGURATOR</span><span>01 — 03</span></div>
            <fieldset className="studio-calc-fieldset">
              <legend><span>01</span> Pilih jenis proyek</legend>
              <p>Fondasi utama sistem yang ingin Anda bangun.</p>
              <div className="studio-calc-types">
                {PROJECT_TYPES.map(item => (
                  <button type="button" key={item.id} aria-pressed={type === item.id}
                    className={'studio-calc-type' + (type === item.id ? ' selected' : '')} onClick={() => setType(item.id)}>
                    <span className="studio-calc-icon"><Icon name={item.icon} size={22} /></span>
                    <strong>{item.name}</strong><small>{item.caption}</small>
                    <span className="studio-calc-check" aria-hidden="true"><Icon name="check" size={13} /></span>
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset className="studio-calc-fieldset">
              <legend><span>02</span> Skala pengerjaan</legend>
              <p>Seberapa besar dan mendalam kebutuhannya?</p>
              <div className="studio-calc-complexity">
                {COMPLEXITIES.map(item => (
                  <button type="button" key={item.id} aria-pressed={complexity === item.id}
                    className={'studio-calc-scale' + (complexity === item.id ? ' selected' : '')} onClick={() => setComplexity(item.id)}>
                    <span className="studio-calc-radio" aria-hidden="true" />
                    <strong>{item.name}</strong><small>{item.caption}</small>
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset className="studio-calc-fieldset">
              <legend><span>03</span> Fitur tambahan</legend>
              <p>Tambahkan fitur sesuai kebutuhan bisnis Anda.</p>
              <div className="studio-calc-features">
                {ESTIMATE_FEATURES.map(item => (
                  <label className={'studio-calc-feature' + (features.includes(item.id) ? ' selected' : '')} key={item.id}>
                    <input type="checkbox" checked={features.includes(item.id)} onChange={() => toggle(item.id)} />
                    <span className="studio-calc-checkbox" aria-hidden="true"><Icon name="check" size={13} /></span>
                    <span><strong>{item.name}</strong><small>+ {money(item.price)}</small></span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="studio-calc-rush">
              <input type="checkbox" checked={rush} onChange={event => setRush(event.target.checked)} />
              <span className="studio-calc-checkbox" aria-hidden="true"><Icon name="check" size={13} /></span>
              <span><strong>Prioritas pengerjaan</strong><small>Jika jadwal memungkinkan, biaya percepatan simulasi +20%</small></span>
            </label>
            <div className="studio-calc-notes">
              <label htmlFor="studio-project-notes">Ada detail proyek? <small>(opsional)</small></label>
              <textarea id="studio-project-notes" value={notes} onChange={event => setNotes(event.target.value)} rows="3" maxLength="600" placeholder="Contoh: dashboard stok 2 cabang dengan laporan penjualan bulanan..." />
              <button className="studio-calc-reset" type="button" onClick={reset}>↺ Mulai ulang</button>
            </div>
          </div>
          <aside className="studio-quote" aria-label="Ringkasan estimasi">
            <div className="studio-quote-top"><span><i /> ESTIMASI LANGSUNG</span><Icon name="chart" size={20} /></div>
            <p className="studio-quote-label">Perkiraan investasi awal</p>
            <div className="studio-quote-price" aria-live="polite" aria-atomic="true">
              <motion.strong key={estimate.min} initial={reduce ? false : { opacity: .5, y: 7 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .2 }}>{money(estimate.min)}</motion.strong>
              <span>— {money(estimate.max)}</span>
            </div>
            <p className="studio-quote-hint">Simulasi untuk membantu perencanaan. Bukan penawaran harga final.</p>
            <div className="studio-quote-divider" />
            <h3>Rincian perkiraan</h3>
            <dl className="studio-quote-breakdown">
              <div><dt>Harga dasar · {estimate.project.name}</dt><dd>{money(estimate.project.base)}</dd></div>
              <div><dt>Skala · {estimate.scope.name}</dt><dd>{money(estimate.scopeFee)}</dd></div>
              <div><dt>Fitur tambahan ({estimate.chosenFeatures.length})</dt><dd>{money(estimate.featuresFee)}</dd></div>
              {rush && <div><dt>Prioritas</dt><dd>{money(estimate.rushFee)}</dd></div>}
            </dl>
            <div className="studio-quote-total"><span>Nilai tengah simulasi</span><strong>{money(estimate.total)}</strong></div>
            <div className="studio-quote-duration"><Icon name="clock" size={19} /><span>Estimasi durasi</span><strong>{estimate.durationMin}–{estimate.durationMax} minggu</strong></div>
            <a className="studio-btn studio-quote-cta" href={getWaLink(message)} target="_blank" rel="noopener noreferrer">
              <Icon name="wa" size={19} /> Diskusikan estimasi <span>↗</span>
            </a>
            <p className="studio-quote-small">Rincian pilihan Anda ikut terkirim ke WhatsApp. Belum termasuk hosting, domain, biaya pihak ketiga, dan pajak jika berlaku.</p>
            <p className="studio-quote-security"><Icon name="shield" size={15} /> Tidak perlu akun. Tidak ada biaya untuk menghitung.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}
