import {
  AppBar, Toolbar, Grid, Box,
} from '@mui/material';
import React, { ReactElement } from 'react';
import HeaderIcon from '../../assets/header';
import Icon from '../../assets/icon';
import { Spot } from '../../features/getSpotsSlice';
import MainButton from '../buttons.component/mainButton.button';
import ThemeButton from '../buttons.component/themeButton.button';
import SearchBar from '../searchbar.component';

interface Props {
    theme: boolean
    onMainButton: () => void;
    spots: Array<Spot>;
}

const Header = (props: Props): ReactElement => {
  const { theme, onMainButton, spots } = props;
  return (
    <AppBar
      position="fixed"
    >
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ bgcolor: 'background.default' }}>
          <Grid container alignItems="center">
            <Grid
              item
              xs={2}
              sm={4}
              md={2}
            />
            <Grid
              item
              xs={2}
              sm={6}
              md={8}
              sx={{
                display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Icon />
              <HeaderIcon isDark={!!theme} size={60} />
            </Grid>
            <Grid
              item
              xs={2}
              sm={2}
              md={2}
              sx={{
                display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center',
              }}
            >
              <SearchBar spots={spots} />
              <ThemeButton isDark={!!theme} />
              <MainButton onClick={onMainButton} />
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
