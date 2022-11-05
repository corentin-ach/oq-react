import { Quality } from '../features/getSpotsSlice';
import i18n from '../locales/i18n';

const computeStatusBySpot = (quality: Quality) => {
  const goodQuality = Object.values(quality).reduce((a, item) => a + (item === false ? 1 : 0), 0);
  if (goodQuality > 2) return i18n.t('translation:mapView.spotCard.quality.statusGood');
  if (goodQuality === 2) return i18n.t('translation:mapView.spotCard.quality.statusSoso');
  return i18n.t('translation:mapView.spotCard.quality.statusBad');
};

export default computeStatusBySpot;
