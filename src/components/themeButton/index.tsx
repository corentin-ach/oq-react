import React from 'react';
import { IconButton, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const ThemeButton = () => (
  <Box sx={{
    bgcolor: 'background',
    height: 50,
    width: 50,
    position: 'absolute',
    top: 0,
    right: 50,
  }}
  >
    <IconButton sx={{ ml: 1 }}><Brightness4Icon /></IconButton>
  </Box>
);

export default ThemeButton;
