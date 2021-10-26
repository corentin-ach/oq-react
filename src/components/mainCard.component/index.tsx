import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WiRaindrop } from 'react-icons/wi';

const MainCard = (): ReactElement => {
  const { t } = useTranslation(['translation']);
  return (
    <Box
      width="300px"
      height="250px"
      sx={{
        bgcolor: 'background.default',
        border: 0,
        borderRadius: 5,
        zIndex: 10,
        position: 'absolute',
        top: 0,
        left: 0,
        margin: 5,
        paddingLeft: 5,
        alignContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <WiRaindrop color="#5DADEC" size={80} />
      <Box sx={{
        color: 'text.primary', fontSize: 25, fontWeight: 'bold', textAlign: 'left',
      }}
      >
        {t('translation:mapView.welcomeCard.welcomeTitle')}
      </Box>
    </Box>
  );
};

export default MainCard;
