import React, { ReactElement } from 'react';
import {
  Box, Typography, Button, Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import BottleIcon from '../../assets/bottle';
import RainDropIcon from '../../assets/raindrop';
import SealIcon from '../../assets/seal';
import IndicatorIcon from '../../assets/indicator';
import { Spot } from '../../features/setSpotSlice';
import ModalSpot from '../modalSpot.component';

interface Props {
  selectedSpot: Spot
}

const SpotCard = (props: Props): ReactElement => {
  const { t } = useTranslation(['translation']);
  const { selectedSpot } = props;
  const [open, setOpen] = React.useState(false);
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
      data: !selectedSpot.quality.water ? 'Bonne' : 'Mauvaise',
      color: !selectedSpot.quality.water ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },
    {
      id: 2,
      icon: <BottleIcon size={36} />,
      data: !selectedSpot.quality.plastic ? 'Propre' : 'Présence',
      color: !selectedSpot.quality.plastic ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },
    {
      id: 3,
      icon: <SealIcon size={36} />,
      data: !selectedSpot.quality.seal ? 'Aucun' : 'Présence',
      color: !selectedSpot.quality.seal ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },

  ];
  return (
    <Box
      width="300px"
      height="200px"
      sx={styles.mainCard}
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      >
        <Typography sx={styles.spotTitle}>
          {selectedSpot.name}
        </Typography>
        <IndicatorIcon status={!selectedSpot.quality.status ? '#65DEAB' : '#F38732'} size="30" />
      </Box>

      <Box sx={{
        justifyContent: 'space-between', display: 'flex', flexDirection: 'column', height: '100%', paddingTop: 2,
      }}
      >
        <Grid container sx={{ justifyContent: 'space-around' }}>
          {spotData.map((data) => (
            <Box
              key={data.id}
              sx={{
                bgcolor: data.color, borderRadius: 2, height: 70, width: 90, paddingTop: 1.5,
              }}
            >
              <Box>{data.icon}</Box>
              <Box sx={{
                display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
              }}
              >
                <Typography sx={{ color: 'text.primary', fontSize: 12, marginLeft: 0.4 }}>{data.data}</Typography>
              </Box>
            </Box>
          ))}
        </Grid>

        <Button
          size="large"
          sx={{
            bgcolor: 'background.paper', textTransform: 'none', height: '50px', borderRadius: 2, marginTop: 2,
          }}
          onClick={() => handleOpen()}
        >
          <Typography sx={styles.signalTitle}>
            {t('translation:mapView.welcomeCard.signal')}
          </Typography>
        </Button>
      </Box>
      <ModalSpot mode={open} handleClose={() => handleClose()} />
    </Box>
  );
};

export default SpotCard;
