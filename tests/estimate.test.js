import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateEstimate, createEstimateMessage } from '../src/shared/estimate.js';

test('web app basic pricing agrees with listed starting price', () => {
  const result = calculateEstimate({ type: 'webapp', complexity: 'basic', features: [], rush: false });
  assert.equal(result.total, 5_000_000);
  assert.equal(result.min, 4_250_000);
  assert.equal(result.max, 6_000_000);
  assert.equal(result.durationMin, 3);
  assert.equal(result.durationMax, 6);
});

test('optional modules and rush do not mutate source data', () => {
  const features = ['roles', 'reports', 'roles'];
  const result = calculateEstimate({ type: 'website', complexity: 'standard', features, rush: true });
  assert.equal(result.chosenFeatures.length, 2);
  assert.equal(result.featuresFee, 2_000_000);
  assert.equal(result.rushFee, Math.round(result.subtotal * .2 / 250_000) * 250_000);
  assert.equal(features.length, 3);
});

test('WhatsApp prefill contains user selections and no fabricated firm quote', () => {
  const result = calculateEstimate({ type: 'mobile', complexity: 'advanced', features: ['payment'] });
  const message = createEstimateMessage(result, 'Butuh sistem reservasi untuk usaha saya.');
  assert.match(message, /Mobile \/ PWA custom/);
  assert.match(message, /Pembayaran online/);
  assert.match(message, /Butuh sistem reservasi/);
  assert.match(message, /penawaran final/i);
});
