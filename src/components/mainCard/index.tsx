import React from 'react';
import { Box } from '@mui/material';

const MainCard = () => (
  <Box
    width="300px"
    height="300px"
    sx={{
      background: '#F0F0F0',
      border: 0,
      borderRadius: 10,
      zIndex: 10,
      position: 'absolute',
      top: 0,
      left: 0,
      margin: 5,
    }}
  >
    <Box sx={{ color: 'text.primary', fontSize: 34, fontWeight: 'bold' }}>Sessions</Box>
  </Box>
);

export default MainCard;
