import React from 'react';
import {
  Alert,
  Box, Typography,
} from '@mui/material';
import SpotCard from '../../../map.view/components/spotCard.component';
import { Spot } from '../../../../features/getSpotsSlice';

interface Props {
    spot: Spot;
    isDark: boolean;
    showInfoSpot: () => void;
}

const InfoSpot = (props: Props) => {
  const { spot, isDark, showInfoSpot } = props;
  return (
    <Box>
      <SpotCard
        showInfoSpot={() => showInfoSpot()}
        selectedSpot={spot}
        isDark={isDark}
        isExpandedCard
      />
      {spot.quality.observation ? (
        <div>
          <Typography variant="h6" sx={{ paddingTop: 4, paddingBottom: 2 }}>Dernier commentaire</Typography>
          <Alert variant="outlined" severity="warning">
            <Typography variant="body2">{spot.quality.observation}</Typography>
          </Alert>
        </div>
      ) : <Typography variant="h6" sx={{ paddingTop: 4 }}>Aucun commentaire</Typography>}
    </Box>
  );
};

export default InfoSpot;
