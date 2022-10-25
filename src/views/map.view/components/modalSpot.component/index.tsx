import {
  Dialog, Typography, Box, Button, Grid,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import BottleIcon from '../../../../assets/bottle';
import RainDropIcon from '../../../../assets/raindrop';
import SealIcon from '../../../../assets/seal';
import styles from './styles';
import { colors } from '../../../../styles/theme';
import { Spot } from '../../../../features/setSpotSlice';
import { setVote } from '../../../../features/voteSlice';

interface Props {
    mode: boolean
    handleClose: () => void
    selectedSpot: Spot
}

interface Vote {
  id: string,
  quality: {
    water: boolean,
    plastic: boolean,
    seal: boolean,
  }
}

const ModalSpot = (props: Props) => {
  const { mode, handleClose, selectedSpot } = props;
  const { t } = useTranslation(['translationFR']);
  const [water, setWater] = useState(false);
  const [plastic, setPlastic] = useState(false);
  const [seal, setSeal] = useState(false);
  const [quality, setQuality]: any = useState({});
  const dispatch = useDispatch();

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  useEffect(() => {
    const vote: Vote = {
      id: selectedSpot.id,
      quality: {
        water,
        plastic,
        seal,
      },
    };
    setQuality(vote);
  }, [selectedSpot, water, plastic, seal]);

  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon size={25} />,
      name: t('translation:mapView.dialogSpot.water'),
      onClick: () => setWater(!water),
      check: water ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },
    {
      id: 2,
      icon: <BottleIcon size={25} />,
      name: t('translation:mapView.dialogSpot.plastic'),
      onClick: () => setPlastic(!plastic),
      check: plastic ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },
    {
      id: 3,
      icon: <SealIcon size={25} />,
      name: t('translation:mapView.dialogSpot.seal'),
      onClick: () => setSeal(!seal),
      check: seal ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },

  ];

  const onClose = () => {
    handleClose();
    setWater(false);
    setPlastic(false);
    setSeal(false);
  };

  const onSend = () => {
    dispatch(setVote(quality));
    onClose();
  };

  return (
    <Dialog
      open={mode}
      keepMounted
      maxWidth="xs"
      fullWidth
      onClose={handleClose}
    >
      <Box sx={styles.container}>
        <Typography variant="h6" sx={styles.title}>
          {t('translation:mapView.dialogSpot.title')}
        </Typography>
        <Typography sx={styles.description}>
          {t('translation:mapView.dialogSpot.description', { spotName: selectedSpot.name })}
        </Typography>
        {spotData.map((data) => (
          <motion.div
            variants={variants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={data.id}
          >
            <Grid container sx={styles.optionCard} key={data.id} onClick={data.onClick}>

              <Grid item md={2} sx={styles.centerFlex}>{data.check}</Grid>
              <Grid item md={2} sx={styles.centerFlex}>
                {data.icon}
              </Grid>
              <Grid item md={6}>
                <Typography sx={styles.optionTitle}>{data.name}</Typography>
              </Grid>
              <Grid item md={1} />
            </Grid>
          </motion.div>
        ))}
        <Grid container sx={styles.buttonsArea}>
          <Grid item md={6} sx={styles.centerFlex}>
            <Button
              size="large"
              fullWidth
              sx={{
                textTransform: 'none', height: '50px', borderRadius: 2,
              }}
              onClick={() => onClose()}
            >
              <Typography sx={styles.cancelButton}>
                {t('translation:mapView.dialogSpot.cancelButton')}
              </Typography>
            </Button>
          </Grid>
          <Grid item md={6} sx={styles.centerFlex}>
            <Button
              disabled={!water && !plastic && !seal}
              size="large"
              fullWidth
              sx={{
                textTransform: 'none', height: '50px', borderRadius: 2,
              }}
              onClick={() => onSend()}
            >
              <Typography sx={styles.sendButton}>
                {t('translation:mapView.dialogSpot.sendButton')}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default ModalSpot;
