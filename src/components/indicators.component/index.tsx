import {
  Box, Typography,
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BottleIcon from '../../assets/bottle';
import RainDropIcon from '../../assets/raindrop';
import SealIcon from '../../assets/seal';

const Indicators = () => {
  const { t } = useTranslation(['translation']);
  const indicators = [
    {
      id: 1,
      icon: <RainDropIcon size={35} />,
      title: t('translation:contentView.indicators.water.title'),
      description: t('translation:contentView.indicators.water.description'),
    },
    {
      id: 2,
      icon: <BottleIcon size={35} />,
      title: t('translation:contentView.indicators.plastic.title'),
      description: t('translation:contentView.indicators.plastic.description'),
    },
    {
      id: 3,
      icon: <SealIcon size={35} />,
      title: t('translation:contentView.indicators.seal.title'),
      description: t('translation:contentView.indicators.seal.description'),
    },
  ];
  return (
    <Box>
      {indicators.map((el) => (
        <Box
          key={el.id}
          sx={{
            bgcolor: 'background.paper', borderRadius: 2, marginBottom: 2, padding: 2,
          }}
        >
          {el.icon}
          <Typography sx={{ fontWeight: 'bold' }}>{el.title}</Typography>
          <Typography sx={{ fontSize: 12 }}>{el.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Indicators;
