import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RiDropFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import styles from './styles';
import HelloIcon from '../../../../assets/hello';
import BorderLinearProgress from '../../../../components/linearProgress.component';
import computeStats from '../../../../functions/stats';
import { colors } from '../../../../styles/theme';
import { Spot } from '../../../../types';
import RateCard from '../../../../components/rateCard.component';

interface Props {
  onClick?: () => void;
  isDark: boolean;
  spots: Array<Spot>;
}

const MainCard = (props: Props): ReactElement => {
  const { t } = useTranslation();
  const { onClick, isDark, spots } = props;
  const currentDate = new Date();
  return (
    <Box
      width="300px"
      height="220px"
      sx={{ ...styles.mainCard, bgcolor: !isDark ? 'rgba(255, 255, 255, .80)' : 'rgba(59, 59, 59, .70)', backdropFilter: 'blur(10px)' }}
    >
      <RiDropFill color={colors.primary} size={60} />
      <Typography variant="h6">
        {t('translation:mapView.welcomeCard.welcomeTitle')}
      </Typography>
      <Typography sx={styles.description}>
        {t('translation:mapView.welcomeCard.description')}
      </Typography>
      <motion.div
        variants={{
          open: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 },
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <RateCard style={{ height: '80px' }} spots={spots} />
      </motion.div>
    </Box>
  );
};

export default MainCard;
