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

const SpotCard = (): ReactElement => {
  const { t } = useTranslation(['translation']);
  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon />,
      data: 'Bonne',
    },
    {
      id: 2,
      icon: <BottleIcon />,
      data: 'Propre',
    },
    {
      id: 3,
      icon: <SealIcon />,
      data: 'Aucun',
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
          La Milady
        </Typography>
        <IndicatorIcon status="#65DEAB" size="30" />
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
                bgcolor: 'background.paper', borderRadius: 2, height: 70, width: 90, paddingTop: 1.5,
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
