import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MdNearMe } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { findLocation } from '../../../features/locationSlice';
import styles from '../styles';

const LocationButton = () => {
  const dispatch = useDispatch();
  const userLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(findLocation([position.coords.latitude, position.coords.longitude]));
    });
  };
  return (
    <Box sx={styles.button}>
      <IconButton sx={{ bgcolor: 'background.default' }} onClick={() => userLocation()}>
        <MdNearMe size={32} color="text.default" />
      </IconButton>
    </Box>
  );
};

export default LocationButton;
