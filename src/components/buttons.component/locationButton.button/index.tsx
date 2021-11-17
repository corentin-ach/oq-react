import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { TiLocationArrow } from 'react-icons/ti';
import styles from '../styles';

const LocationButton = () => (
  <Box sx={styles.locationButton}>
    <IconButton sx={{ bgcolor: 'background.default' }} onClick={() => console.log('test')}>
      <TiLocationArrow size={35} color="text.default" />
    </IconButton>
  </Box>
);

export default LocationButton;
