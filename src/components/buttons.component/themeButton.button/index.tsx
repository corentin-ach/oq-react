import React, { ReactElement } from 'react';
import { Box, IconButton } from '@mui/material';
import { MdNightsStay, MdOutlineWbSunny } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../../features/themeSlice';
import styles from '../styles';

interface Props {
  isDark: boolean
}

const ThemeButton = (props: Props): ReactElement => {
  const dispatch = useDispatch();
  const { isDark } = props;
  return (
    <Box sx={{ ...styles.button, marginLeft: 1 }}>
      <IconButton onClick={() => dispatch(toggleTheme())} sx={{ bgcolor: 'background.default' }}>
        {isDark ? <MdOutlineWbSunny size={32} color="#FAD826" /> : <MdNightsStay size={32} color="#FAD826" />}
      </IconButton>
    </Box>
  );
};

export default ThemeButton;
