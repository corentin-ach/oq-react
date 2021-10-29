import React, { ReactElement } from 'react';
import {
  Box, Typography, Button, Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import TempIcon from '../../assets/temp';
import RainDropIcon from '../../assets/raindrop';
import FavIcon from '../../assets/fav';

const SpotCard = (): ReactElement => {
  const { t } = useTranslation(['translation']);
  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon />,
      data: 'Excellent',
    },
    {
      id: 2,
      icon: <TempIcon />,
      data: '21',
    },
    {
      id: 3,
      icon: <FavIcon />,
      data: 'Favoris',
    },

  ];
  return (
    <Box
      width="300px"
      height="200px"
      sx={styles.mainCard}
    >
      <Typography sx={styles.spotTitle}>
        La Milady
      </Typography>
      <Box sx={{
        justifyContent: 'space-between', display: 'flex', flexDirection: 'column', height: '100%', paddingTop: 2,
      }}
      >
        <Grid container sx={{ justifyContent: 'space-around' }}>
          {spotData.map((data) => (
            <Box
              key={data.id}
              sx={{
                bgcolor: 'background.paper', borderRadius: 2, height: 80, width: 90,
              }}
            >
              <Box>{data.icon}</Box>
              <Typography sx={{ color: 'text.primary' }}>{data.data}</Typography>
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
