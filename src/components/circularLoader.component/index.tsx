import React, { ReactElement } from 'react';
import { Box, CircularProgress } from '@mui/material';
import {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import styles from './styles';

const CircularLoader = (): ReactElement => (
  <Box sx={styles.loader}>
    <CircularProgress
      size={70}
      thickness={4}
      sx={{
        color: '#5DADEC',
        animationDuration: '950ms',
        position: 'absolute',
        left: 0,
        [`& .${circularProgressClasses.circle}`]: {
          strokeLinecap: 'round',
        },
      }}
    />
  </Box>
);

export default CircularLoader;
