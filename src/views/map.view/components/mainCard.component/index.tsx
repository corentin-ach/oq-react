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
import { Spot } from '../../../../features/getSpotsSlice';
import { colors } from '../../../../styles/theme';

interface Props {
  onClick: () => void;
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
        <Box
          width="100%"
          height="80px"
          sx={styles.infoCard}
          onClick={onClick}
        >
          <Box sx={styles.helloIcon}>
            <HelloIcon month={dayjs(currentDate).format('MMM')} day={dayjs(currentDate).format('DD')} />
          </Box>
          <Box sx={styles.rate}>
            <Typography sx={styles.name}>
              {computeStats(spots).warningRate}
              %
              {t('translation:mapView.welcomeCard.rate')}
              {dayjs(currentDate).format('HH:mm')}
            </Typography>
            <BorderLinearProgress height={6} variant="determinate" value={100 - computeStats(spots).warningRate} />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default MainCard;
