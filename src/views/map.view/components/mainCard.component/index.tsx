import React, { ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { RiDropFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import styles from './styles';
import HelloIcon from '../../../../assets/hello';

interface Props {
  onClick: () => void;
  isDark: boolean;
}

const MainCard = (props: Props): ReactElement => {
  const { t } = useTranslation();
  const { onClick, isDark } = props;
  return (
    <Box
      width="300px"
      height="230px"
      sx={{ ...styles.mainCard, bgcolor: !isDark ? 'rgba(255, 255, 255, .70)' : 'rgba(59, 59, 59, .70)', backdropFilter: 'blur(10px)' }}
    >
      <RiDropFill color="#5DADEC" size={60} />
      <Typography variant="h6">
        {t('translation:mapView.welcomeCard.welcomeTitle')}
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
          height="110px"
          sx={styles.infoCard}
          onClick={onClick}
        >
          <Box sx={styles.helloIcon}>
            <HelloIcon />
          </Box>
          <Box>
            <Typography sx={styles.name}>
              {t('translation:mapView.welcomeCard.title')}
            </Typography>
            <Typography sx={styles.description}>
              {t('translation:mapView.welcomeCard.description')}
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default MainCard;
