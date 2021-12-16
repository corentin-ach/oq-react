import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PhareIcon from '../../../../assets/phare';

const About = () => {
  const { t } = useTranslation(['translation']);

  return (
    <Box>
      <Typography>
        {t('translation:contentView.about.intro')}
      </Typography>
      <PhareIcon />
      <Typography>
        {t('translation:contentView.about.p1')}
      </Typography>
    </Box>
  );
};

export default About;
