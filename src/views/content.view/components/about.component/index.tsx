import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import EarthIcon from '../../../../assets/earth';
import styles from '../styles';

const About = () => {
  const { t } = useTranslation(['translation']);

  return (
    <Box sx={{ height: '100%' }}>
      <Typography variant="h5" fontWeight="bold" marginBottom="20px">
        {t('translation:contentView.about.title')}
      </Typography>
      <Typography>
        {t('translation:contentView.about.intro')}
      </Typography>
      <EarthIcon size={350} />
      <Typography>
        {t('translation:contentView.about.p1')}
      </Typography>
      <Button
        size="large"
        variant="outlined"
        sx={styles.button}
      >
        <Typography>
          {t('translation:contentView.about.buttonLink')}
        </Typography>
      </Button>
    </Box>
  );
};

export default About;
