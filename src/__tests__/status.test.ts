import dayjs from 'dayjs';
import { describe, expect, test } from '@jest/globals';
import { computeStatus, computeStatusName } from '../functions/status';
import i18n from '../locales/i18n';

describe('status', () => {
  const qualityTest = {
    water: true,
    plastic: false,
    seal: false,
    date: dayjs(new Date()).format('YYYY-MM-DD'),
    observation: '',
  };
  test('computeStatus', () => {
    expect(computeStatus(qualityTest, [])).toBe(false);
  });
  test('computeStatusName - sosoQuality', () => {
    expect(computeStatusName(qualityTest)).toMatch(i18n.t('translation:mapView.spotCard.quality.statusSoso'));
  });
});
