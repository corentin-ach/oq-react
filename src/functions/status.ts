import dayjs from 'dayjs';
import i18n from '../locales/i18n';
import { Quality } from '../types';

export const computeStatusName = (quality: Quality) => {
  const goodQuality = Object.values(quality).reduce((a, item) => a + (item === false ? 1 : 0), 0);
  if (goodQuality > 2) return i18n.t('translation:mapView.spotCard.quality.statusGood');
  if (goodQuality === 2) return i18n.t('translation:mapView.spotCard.quality.statusSoso');
  return i18n.t('translation:mapView.spotCard.quality.statusBad');
};

export const computeStatus = (quality: Quality, votes: Array<Quality>) => {
  let status = false;
  const lastDate: any = dayjs(quality?.date);
  if (
    (quality?.water || quality?.plastic || quality?.seal)
    && (votes.some((el) => lastDate.diff(dayjs(el?.date), 'day') <= 3))
  ) {
    status = true;
  } else status = false;
  return status;
};
