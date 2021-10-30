import React, { ReactElement } from 'react';
import { Box, IconButton } from '@mui/material';
import { MdOutlineBrightness4, MdOutlineWbSunny } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../features/themeSlice';
import styles from './styles';

interface Props {
  isDark: boolean
}

const ThemeButton = (props: Props): ReactElement => {
  const dispatch = useDispatch();
  const { isDark } = props;
  return (
    <Box sx={styles.toggleButton}>
      <IconButton onClick={() => dispatch(toggleTheme())} sx={{ bgcolor: 'background.default' }}>
        {isDark ? <MdOutlineWbSunny size={30} color="text.default" /> : <MdOutlineBrightness4 size={30} color="text.default" />}
      </IconButton>
    </Box>
  );
};

export default ThemeButton;
