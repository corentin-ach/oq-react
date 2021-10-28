import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import styles from './styles';

const SpotCard = (): ReactElement => (
  <Box
    width="300px"
    height="250px"
    sx={styles.mainCard}
  >
    test
  </Box>
);

export default SpotCard;
