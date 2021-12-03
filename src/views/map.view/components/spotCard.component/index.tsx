import React, { ReactElement, useEffect, useState } from 'react';
import {
  Box, Typography, Button, Grid, Snackbar, Alert, Slide, SlideProps,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import styles from './styles';
import BottleIcon from '../../../../assets/bottle';
import RainDropIcon from '../../../../assets/raindrop';
import SealIcon from '../../../../assets/seal';
import IndicatorIcon from '../../../../assets/indicator';
import { Spot } from '../../../../features/setSpotSlice';
import ModalSpot from '../modalSpot.component';
import { RootState } from '../../../../app/store';

interface Props {
  selectedSpot: Spot
}

const SpotCard = (props: Props): ReactElement => {
  const { t } = useTranslation(['translation']);
  const { selectedSpot } = props;
  const [open, setOpen] = useState(false);
  const { loading } = useSelector((state: RootState) => state.vote);
  const [alert, setAlert] = useState(false);
  // eslint-disable-next-line react/jsx-props-no-spreading
  const Transition = (slideProps: SlideProps): ReactElement => <Slide {...slideProps} direction="right" />;

  useEffect(() => {
    if (loading) {
      setAlert(true);
    }
  }, [loading]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon size={34} />,
      data: !selectedSpot.quality.water ? t('translation:mapView.spotCard.quality.goodWater') : t('translation:mapView.spotCard.quality.badWater'),
      color: !selectedSpot.quality.water ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },
    {
      id: 2,
      icon: <BottleIcon size={36} />,
      data: !selectedSpot.quality.plastic ? t('translation:mapView.spotCard.quality.goodPlastic') : t('translation:mapView.spotCard.quality.badPlastic'),
      color: !selectedSpot.quality.plastic ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },
    {
      id: 3,
      icon: <SealIcon size={36} />,
      data: !selectedSpot.quality.seal ? t('translation:mapView.spotCard.quality.goodSeal') : t('translation:mapView.spotCard.quality.badSeal'),
      color: !selectedSpot.quality.seal ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },

  ];

  return (
    <Box
      width="300px"
      height="200px"
      sx={styles.mainCard}
    >
      <Box sx={styles.headerCard}>
        <Typography sx={styles.spotTitle}>
          {selectedSpot.name}
        </Typography>
        <IndicatorIcon status={!selectedSpot.quality.status ? '#65DEAB' : '#F38732'} size="30" />
      </Box>

      <Box sx={styles.qualityContainer}>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          {spotData.map((data) => (
            <Box
              key={data.id}
              sx={{
                bgcolor: data.color, borderRadius: 2, height: 70, width: 90, paddingTop: 1.5,
              }}
            >
              <Box>{data.icon}</Box>
              <Box sx={styles.dataContainer}>
                <Typography sx={styles.dataText}>{data.data}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        <Button
          size="large"
          sx={styles.button}
          onClick={() => handleOpen()}
        >
          <Typography sx={styles.signalTitle}>
            {t('translation:mapView.welcomeCard.signal')}
          </Typography>
        </Button>
      </Box>
      <ModalSpot mode={open} handleClose={() => handleClose()} selectedSpot={selectedSpot} />
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={() => setAlert(false)}
        TransitionComponent={Transition}
      >
        <Alert severity="success" onClose={() => setAlert(false)} sx={{ width: '100%' }}>
          {t('translation:mapView.spotCard.stackMessage')}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SpotCard;
