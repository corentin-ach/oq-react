import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import SpotCard from '../spotCard.component';
import MainCard from '../mainCard.component';
import styles from './styles';

const DataCards = (): ReactElement => (
  <Box sx={styles.dataCards}>
    <MainCard />
    <SpotCard />
  </Box>
);

export default DataCards;
