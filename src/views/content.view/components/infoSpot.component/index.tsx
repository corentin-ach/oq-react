import React from 'react';
import {
  Alert,
  Box, Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SpotCard from '../../../map.view/components/spotCard.component';
import { Spot } from '../../../../types';

interface Props {
    spot: Spot;
    isDark: boolean;
    showInfoSpot: () => void;
}

const InfoSpot = (props: Props) => {
  const { spot, isDark, showInfoSpot } = props;
  const { t } = useTranslation();
  return (
    <Box>
      <SpotCard
        showInfoSpot={() => showInfoSpot()}
        spot={spot}
        isDark={isDark}
        isExpandedCard
      />
      {spot.quality.observation ? (
        <div>
          <Typography variant="h6" sx={{ paddingTop: 4, paddingBottom: 2 }}>{t('translation:contentView.infoSpot.lastComment')}</Typography>
          <Alert variant="outlined" severity="warning">
            <Typography variant="body2">{spot.quality.observation}</Typography>
          </Alert>
        </div>
      ) : <Typography variant="h6" sx={{ paddingTop: 4 }}>{t('translation:contentView.infoSpot.noComment')}</Typography>}
      <Typography variant="h6" sx={{ paddingTop: 4 }}>{t('translation:contentView.tab.stats')}</Typography>
    </Box>
  );
};

export default InfoSpot;
