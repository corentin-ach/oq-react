import {
  Dialog, Typography, Box, Button, Grid,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import BottleIcon from '../../assets/bottle';
import RainDropIcon from '../../assets/raindrop';
import SealIcon from '../../assets/seal';
import styles from './styles';
import { colors } from '../../styles/theme';
import { Spot } from '../../features/setSpotSlice';
import { setVote } from '../../features/voteSlice';

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
  const { t } = useTranslation(['translation']);
  const [water, setWater] = useState(false);
  const waterVote = water;
  const [plastic, setPlastic] = useState(false);
  const plasticVote = plastic;
  const [seal, setSeal] = useState(false);
  const sealVote = seal;
  const [votes, setVotes]: any = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const vote: Vote = {
      id: selectedSpot.id,
      quality: {
        water: waterVote,
        plastic: plasticVote,
        seal: sealVote,
      },
    };
    setVotes(vote);
  }, [waterVote, plasticVote, sealVote, selectedSpot]);

  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon size={25} />,
      name: 'Mauvaise qualité de leau',
      onClick: () => setWater(!waterVote),
      check: water ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },
    {
      id: 2,
      icon: <BottleIcon size={25} />,
      name: 'Présence de plastique',
      onClick: () => setPlastic(!plasticVote),
      check: plastic ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },
    {
      id: 3,
      icon: <SealIcon size={25} />,
      name: 'Présence dun animal marin',
      onClick: () => setSeal(!sealVote),
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
    dispatch(setVote(votes));
    handleClose();
  };

  return (
    <Dialog
      open={mode}
      keepMounted
      maxWidth="sm"
      fullWidth
      onClose={handleClose}
    >
      <Box sx={styles.container}>
        <Typography sx={styles.title}>
          Signaler
        </Typography>
        {spotData.map((data) => (
          <Grid container sx={styles.optionCard} key={data.id} onClick={data.onClick}>
            <Grid item md={3} sx={styles.centerFlex}>{data.check}</Grid>
            <Grid item md={1} sx={styles.centerFlex}>
              {data.icon}
            </Grid>
            <Grid item md={5}>
              <Typography>{data.name}</Typography>
            </Grid>
            <Grid item md={3} />
          </Grid>
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
