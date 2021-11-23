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

interface Props {
  selectedSpot: Spot
}

const SpotCard = (props: Props): ReactElement => {
  const { t } = useTranslation(['translation']);
  const { selectedSpot } = props;
  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon />,
      data: selectedSpot.quality.water === 1 ? 'Bonne' : 'Mauvaise',
      color: selectedSpot.quality.water === 1 ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },
    {
      id: 2,
      icon: <BottleIcon />,
      data: selectedSpot.quality.plastic === 1 ? 'Propre' : 'Présence',
      color: selectedSpot.quality.plastic === 1 ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },
    {
      id: 3,
      icon: <SealIcon />,
      data: selectedSpot.quality.seal === 1 ? 'Aucun' : 'Présence',
      color: selectedSpot.quality.seal === 1 ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
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
        <IndicatorIcon status={selectedSpot.quality.status === 1 ? '#65DEAB' : '#F38732'} size="30" />
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
        >
          <Typography sx={styles.signalTitle}>
            {t('translation:mapView.welcomeCard.signal')}
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default SpotCard;
