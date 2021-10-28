import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RiDropFill } from 'react-icons/ri';
import styles from './styles';

const MainCard = (): ReactElement => {
  const { t } = useTranslation(['translation']);
  return (
    <Box
      width="300px"
      height="230px"
      sx={styles.mainCard}
    >
      <RiDropFill color="#5DADEC" size={60} />
      <Typography sx={styles.welcomeTitle}>
        {t('translation:mapView.welcomeCard.welcomeTitle')}
      </Typography>
      <Box
        width="100%"
        height="110px"
        sx={styles.infoCard}
      >
        <Typography sx={styles.name}>
          EndlessO
        </Typography>
        <Typography sx={styles.description}>
          {t('translation:mapView.welcomeCard.description')}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainCard;
