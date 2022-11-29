import { Box, Typography, Button } from '@mui/material';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import HeaderIcon from '../../assets/header';
import AppIcon from '../../assets/app';
import EarthIcon from '../../assets/earth';

interface Props {
    theme: boolean;
}

const MobileView = (props: Props): ReactElement => {
  const { t } = useTranslation(['translation']);
  const { theme } = props;
  return (
    <Box sx={styles.mainView}>
      <AppIcon />
      <HeaderIcon isDark={!!theme} size={100} />
      <Typography sx={styles.introText}>
        {t('translation:mobileView.intro')}
      </Typography>
      <Button
        size="large"
        variant="outlined"
        sx={styles.button}
      >
        <Typography>
          {t('translation:mobileView.installButton')}
        </Typography>
      </Button>
      <Box sx={{ width: '100%' }}>
        <EarthIcon size={360} />
      </Box>
    </Box>
  );
};

export default MobileView;
