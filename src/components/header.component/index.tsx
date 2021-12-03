import { AppBar, Toolbar, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { ReactElement } from 'react';
import HeaderIcon from '../../assets/header';
import Icon from '../../assets/icon';
import LocationButton from '../buttons.component/locationButton.button';
import ThemeButton from '../buttons.component/themeButton.button';

interface Props {
    theme: boolean
}

const Header = (props: Props): ReactElement => {
  const { theme } = props;
  return (
    <AppBar position="fixed">
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar sx={{ bgcolor: 'background.default' }}>
          <Grid container alignItems="center">
            <Grid
              item
              xs={2}
              sm={4}
              md={1}
            />
            <Grid
              item
              xs={2}
              sm={6}
              md={10}
              sx={{
                display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <Icon />
              <HeaderIcon isDark={!!theme} />
            </Grid>
            <Grid
              item
              xs={2}
              sm={2}
              md={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end' }}
            >
              <LocationButton />
              <ThemeButton isDark={!!theme} />
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;
