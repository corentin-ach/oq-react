/* eslint-disable no-nested-ternary */
import React, { ReactElement, useState } from 'react';
import {
  Box, Typography, Button, Grid, Chip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import styles from './styles';
import BottleIcon from '../../../../assets/bottle';
import RainDropIcon from '../../../../assets/raindrop';
import SealIcon from '../../../../assets/seal';
import ModalSpot from '../modalSpot.component';
import { setVote } from '../../../../features/voteSlice';
import { colors } from '../../../../styles/theme';
import { Spot } from '../../../../features/getSpotsSlice';
import computeStatusBySpot from '../../../../functions/status';

interface Props {
  selectedSpot: Spot
  isDark: boolean
}

const SpotCard = (props: Props): ReactElement => {
  const { t } = useTranslation(['translationFR']);
  const { selectedSpot, isDark } = props;
  const [open, setOpen] = useState(false);
  const [cleanButton, setCleanButton] = useState(true);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const cleanVote: any = {
    id: selectedSpot.id,
    quality: {
      water: false,
      plastic: false,
      seal: false,
    },
  };
  const submitClean = () => {
    setCleanButton(false);
    dispatch(setVote(cleanVote));
  };
  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon size={34} />,
      data: !selectedSpot.quality.water ? t('translation:mapView.spotCard.quality.goodWater') : t('translation:mapView.spotCard.quality.badWater'),
      color: !selectedSpot.quality.water ? colors.goodQuality2 : colors.badQuality2,
    },
    {
      id: 2,
      icon: <BottleIcon size={36} />,
      data: !selectedSpot.quality.plastic ? t('translation:mapView.spotCard.quality.goodPlastic') : t('translation:mapView.spotCard.quality.badPlastic'),
      color: !selectedSpot.quality.plastic ? colors.goodQuality2 : colors.badQuality2,
    },
    {
      id: 3,
      icon: <SealIcon size={36} />,
      data: !selectedSpot.quality.seal ? t('translation:mapView.spotCard.quality.goodSeal') : t('translation:mapView.spotCard.quality.badSeal'),
      color: !selectedSpot.quality.seal ? colors.goodQuality2 : colors.badQuality2,
    },
  ];

  return (
    <Box
      width="300px"
      height={selectedSpot.status ? '290px' : '220px'}
      sx={{ ...styles.mainCard, bgcolor: !isDark ? 'rgba(255, 255, 255, .8)' : 'rgba(59, 59, 59, .70)', backdropFilter: 'blur(10px)' }}
    >
      <Box sx={styles.headerCard}>
        <Typography variant="h6">
          {selectedSpot.name}
        </Typography>
        <Chip
          size="small"
          variant="outlined"
          label={computeStatusBySpot(selectedSpot.quality)}
        />
      </Box>
      <Typography sx={styles.timeText}>
        {t('translation:mapView.spotCard.time')}
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
                  bgcolor: 'background.paper', borderRadius: 2, height: 70, width: 90, paddingTop: 1.5, border: `1px solid ${data.color}`,
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
            {t('translation:mapView.spotCard.signal')}
          </Typography>
        </Button>
        {selectedSpot.status && cleanButton ? (
          <Button
            size="large"
            variant="text"
            sx={styles.button}
            onClick={() => submitClean()}
          >
            <Typography sx={styles.cleanTitle}>
              {t('translation:mapView.spotCard.clean')}
            </Typography>
          </Button>
        ) : selectedSpot.status && !cleanButton ? (
          <Button
            disabled
            size="large"
            variant="text"
            sx={styles.cleanButton}
            onClick={() => submitClean()}
          >
            <Typography sx={styles.afterCleanTitle}>
              {t('translation:mapView.spotCard.afterClean')}
            </Typography>
          </Button>
        ) : null}
      </Box>
      <ModalSpot
        isSelectable={false}
        mode={open}
        handleClose={() => handleClose()}
        selectedSpot={selectedSpot}
      />
    </Box>
  );
};

export default SpotCard;
