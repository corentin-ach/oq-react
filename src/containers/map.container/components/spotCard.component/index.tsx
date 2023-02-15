/* eslint-disable no-nested-ternary */
import React, { ReactElement, useState } from 'react';
import {
  Box, Typography, Button, Grid, Chip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import styles from './styles';
import BottleIcon from '../../../../assets/bottle';
import RainDropIcon from '../../../../assets/raindrop';
import SealIcon from '../../../../assets/seal';
import ModalSpot from '../modalSpot.component';
import { colors } from '../../../../styles/theme';
import { computeStatusName } from '../../../../functions/status';
import { setFirestore } from '../../../../firebase/hooks';
import { Spot } from '../../../../types';
import useResponsive from '../../../../functions/useResponsive';

interface Props {
  spot: Spot
  isDark: boolean
  isExpandedCard: boolean
  showInfoSpot?: () => void
  style?: any
}

const SpotCard = (props: Props): ReactElement => {
  const { t } = useTranslation();
  const isMobile = useResponsive();
  const {
    spot, isDark, isExpandedCard, showInfoSpot, style,
  } = props;
  const [open, setOpen] = useState(false);
  const [cleanButton, setCleanButton] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const vote: any = {
    id: spot?.id,
    quality: {
      water: false,
      plastic: false,
      seal: false,
      observation: '',
      date: dayjs(new Date()).format('YYYY-MM-DD'),
    },
  };
  const submitClean = () => {
    setFirestore('spots', vote, spot);
    setCleanButton(false);
  };
  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon size={34} />,
      data: !spot?.quality.water ? t('translation:mapView.spotCard.quality.goodWater') : t('translation:mapView.spotCard.quality.badWater'),
      color: !spot?.quality.water ? colors.goodQuality2 : colors.badQuality2,
    },
    {
      id: 2,
      icon: <BottleIcon size={36} />,
      data: !spot?.quality.plastic ? t('translation:mapView.spotCard.quality.goodPlastic') : t('translation:mapView.spotCard.quality.badPlastic'),
      color: !spot?.quality.plastic ? colors.goodQuality2 : colors.badQuality2,
    },
    {
      id: 3,
      icon: <SealIcon size={36} />,
      data: !spot?.quality.seal ? t('translation:mapView.spotCard.quality.goodSeal') : t('translation:mapView.spotCard.quality.badSeal'),
      color: !spot?.quality.seal ? colors.goodQuality2 : colors.badQuality2,
    },
  ];

  return (
    <Box
      width="auto"
      height="auto"
      sx={{
        ...styles.mainCard, bgcolor: isExpandedCard ? 'background.default' : !isDark ? 'rgba(255, 255, 255, .8)' : 'rgba(59, 59, 59, .70)', backdropFilter: isExpandedCard ? 'none' : 'blur(10px)', padding: isExpandedCard ? 0 : isMobile ? 0 : 2,
      }}
    >
      <Box sx={styles.headerCard}>
        <Typography variant="h6">
          {spot?.name}
        </Typography>
        <Chip
          size="small"
          variant="outlined"
          label={spot?.quality ? computeStatusName(spot?.quality) : ''}
        />
      </Box>
      <Typography sx={styles.timeText}>
        {t('translation:mapView.spotCard.time')}
        {' '}
        {dayjs(spot?.quality.date).format('DD/MM/YY')}
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
        {spot?.status && cleanButton ? (
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
        ) : spot?.status && !cleanButton ? (
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
        {isExpandedCard ? null : (
          <Button onClick={() => showInfoSpot()} sx={{ ...styles.button, bgcolor: 'none' }}>
            <Typography>{t('translation:mapView.spotCard.knowMore')}</Typography>
          </Button>
        )}
      </Box>
      <ModalSpot
        isSelectable={false}
        mode={open}
        handleClose={() => handleClose()}
        spot={spot}
      />
    </Box>
  );
};

export default SpotCard;
