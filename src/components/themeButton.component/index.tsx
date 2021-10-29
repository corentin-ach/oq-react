import React, { ReactElement } from 'react';
import { Box, IconButton } from '@mui/material';
import { MdOutlineBrightness4 } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../features/themeSlice';
import styles from './styles';

const ThemeButton = (): ReactElement => {
  const dispatch = useDispatch();
  return (
    <Box sx={styles.toggleButton}>
      <IconButton onClick={() => dispatch(toggleTheme())} sx={{ bgcolor: 'background.default' }}>
        <MdOutlineBrightness4 size={30} color="text.default" />
      </IconButton>
    </Box>
  );
};

export default ThemeButton;
