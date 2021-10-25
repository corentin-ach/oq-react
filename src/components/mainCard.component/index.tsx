import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MainCard = () => {
  const { t } = useTranslation(['translation']);
  return (
    <Box
      width="300px"
      height="300px"
      sx={{
        bgcolor: 'background.default',
        border: 0,
        borderRadius: 5,
        zIndex: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 5,
      }}
    >
      <Box sx={{
        color: 'text.primary', fontSize: 34, fontWeight: 'bold', paddingTop: 2,
      }}
      >
        {t('translation:mapView.welcomeCard.welcomeTitle')}
      </Box>
    </Box>
  );
};

export default MainCard;
