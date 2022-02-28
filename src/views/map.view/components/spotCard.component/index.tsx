import React, { ReactElement, useState } from 'react';
import {
  Box, Typography, Button, Grid,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import styles from './styles';
import BottleIcon from '../../../../assets/bottle';
import RainDropIcon from '../../../../assets/raindrop';
import SealIcon from '../../../../assets/seal';
import IndicatorIcon from '../../../../assets/indicator';
import { Spot } from '../../../../features/setSpotSlice';
import ModalSpot from '../modalSpot.component';

interface Props {
  selectedSpot: Spot
  isDark: boolean
}

const SpotCard = (props: Props): ReactElement => {
  const { t } = useTranslation(['translation']);
  const { selectedSpot, isDark } = props;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon size={34} />,
      data: !selectedSpot.quality.water ? t('translation:mapView.spotCard.quality.goodWater') : t('translation:mapView.spotCard.quality.badWater'),
      color: !selectedSpot.quality.water ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },
    {
      id: 2,
      icon: <BottleIcon size={36} />,
      data: !selectedSpot.quality.plastic ? t('translation:mapView.spotCard.quality.goodPlastic') : t('translation:mapView.spotCard.quality.badPlastic'),
      color: !selectedSpot.quality.plastic ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },
    {
      id: 3,
      icon: <SealIcon size={36} />,
      data: !selectedSpot.quality.seal ? t('translation:mapView.spotCard.quality.goodSeal') : t('translation:mapView.spotCard.quality.badSeal'),
      color: !selectedSpot.quality.seal ? 'background.paper' : 'rgb(243, 135, 50, 0.3)',
    },
  ];

  return (
    <Box
      width="300px"
      height="220px"
      sx={{ ...styles.mainCard, bgcolor: !isDark ? 'rgba(255, 255, 255, .70)' : 'rgba(59, 59, 59, .70)', backdropFilter: 'blur(10px)' }}
    >
      <Box sx={styles.headerCard}>
        <Typography sx={styles.spotTitle}>
          {selectedSpot.name}
        </Typography>
        <IndicatorIcon status={!selectedSpot.status ? '#65DEAB' : '#F38732'} size="30" />
      </Box>
      <Typography sx={styles.timeText}>
        Dernière alerte le
        {' '}
        {dayjs(selectedSpot.quality.date).format('DD/MM/YY')}
      </Typography>

      <Box sx={styles.qualityContainer}>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          {spotData.map((data) => (
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={data.id}
            >
              <Box
                key={data.id}
                sx={{
                  bgcolor: data.color, borderRadius: 2, height: 70, width: 90, paddingTop: 1.5,
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>{data.icon}</Box>
                <Box sx={styles.dataContainer}>
                  <Typography sx={styles.dataText}>{data.data}</Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Grid>
        <Button
          size="large"
          variant="text"
          sx={styles.button}
          onClick={() => handleOpen()}
        >
          <Typography sx={styles.signalTitle}>
            {selectedSpot.status ? t('translation:mapView.welcomeCard.other') : t('translation:mapView.welcomeCard.signal')}
          </Typography>
        </Button>
      </Box>
      <ModalSpot mode={open} handleClose={() => handleClose()} selectedSpot={selectedSpot} />
    </Box>
  );
};

export default SpotCard;
