import * as React from 'react';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { Spot } from '../../types';
import MapContainer from '../../containers/map.container';
import ReportButton from '../../containers/map.container/components/reportButton.component';
import MainCard from '../../containers/map.container/components/mainCard.component';
import RateCard from '../../components/rateCard.component';
import SpotCard from '../../containers/map.container/components/spotCard.component';
import themeSlice from '../../features/themeSlice';

type Props = {
  isDark: boolean,
  spots: Array<Spot>,
  loading: boolean,
  spot: Spot,
}

const drawerBleeding = 130;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const Puller = styled(Box)(() => ({
  width: 30,
  height: 6,
  backgroundColor: '#B4B4B4',
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

export default function MobileView(props: Props) {
  const {
    isDark, spots, loading, spot,
  } = props;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  useEffect(() => {
    if (spot?.id) setOpen(true);
  }, [spot]);

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <MapContainer isDark={isDark} spots={spots} spot={spot} loading={loading} />
      <ReportButton style={{ top: 20, right: 30 }} spots={spots} spot={spot} />
      <SwipeableDrawer
        transitionDuration={{ enter: 600, exit: 800 }}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <Box
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 11,
            borderTopRightRadius: 11,
            visibility: 'visible',
            right: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'background.default',
          }}
        >
          <Puller />
          <Grid container sx={{ p: 2, height: '50px' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold', color: 'white', paddingLeft: 1, marginBottom: -2,
              }}
            >
              Oavel
            </Typography>
            <Grid item><RateCard style={{ height: '60px' }} spots={spots} /></Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            zIndex: 2,
            backgroundColor: 'background.default',
          }}
        >
          {spot?.id ? (
            <SpotCard
              spot={spot}
              isDark={isDark}
              isExpandedCard={false}
            />
          ) : null}
        </Box>
      </SwipeableDrawer>
    </Root>
  );
}
