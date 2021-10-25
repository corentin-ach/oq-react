import React, { ReactElement } from 'react';
import { Box, IconButton } from '@mui/material';
import { MdOutlineBrightness4 } from 'react-icons/md';

const ThemeButton = (): ReactElement => (
  <Box sx={{
    bgcolor: 'background.default',
    height: 50,
    width: 50,
    position: 'absolute',
    borderRadius: 2,
    top: 0,
    right: '20%',
    margin: 5,
    zIndex: 10,
  }}
  >
    <IconButton>
      <MdOutlineBrightness4 size={30} color="text.default" />
    </IconButton>

  </Box>
);

export default ThemeButton;
