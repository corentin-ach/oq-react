import React, { ReactElement } from 'react';
import {
  Box, Typography, Button, Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import TempIcon from '../../assets/temp.svg';
import FavIcon from '../../assets/fav.svg';
import DropIcon from '../../assets/wi-raindrop.svg';

const SpotCard = (): ReactElement => {
  const { t } = useTranslation(['translation']);
  const spotData = [
    {
      icon: DropIcon,
      data: 'Excellent',
    },
    {
      icon: TempIcon,
      data: '21',
    },
    {
      icon: FavIcon,
      data: 'Favoris',
    },

  ];
  return (
    <Box
      width="300px"
      height="250px"
      sx={styles.mainCard}
    >
      <Typography sx={styles.spotTitle}>
        La milady
      </Typography>

      <Grid>
        {spotData.map((data) => (
          <Box>
            <Box>{data.icon}</Box>
            <Typography>{data.data}</Typography>
          </Box>
        ))}
      </Grid>

      <Button
        size="large"
        sx={{
          bgcolor: 'background.paper', textTransform: 'none', height: '50px', borderRadius: 2,
        }}
      >
        <Typography sx={styles.signalTitle}>
          {t('translation:mapView.welcomeCard.signal')}
        </Typography>
      </Button>

    </Box>
  );
};

export default SpotCard;
