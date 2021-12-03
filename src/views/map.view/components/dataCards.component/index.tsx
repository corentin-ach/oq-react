import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import SpotCard from '../spotCard.component';
import MainCard from '../mainCard.component';
import styles from './styles';
import { Spot } from '../../../../features/setSpotSlice';

interface Props {
  selectedSpot: Spot
}

const DataCards = (props: Props): ReactElement => {
  const { selectedSpot } = props;
  return (
    <Box sx={styles.dataCards}>
      <MainCard />
      {selectedSpot.id ? <SpotCard selectedSpot={selectedSpot} /> : null}
    </Box>
  );
};

export default DataCards;
