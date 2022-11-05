import {
  Typography, Box, Grid, Stepper, StepLabel, Step, StepContent, TextField, Chip, Alert,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch, useSelector } from 'react-redux';
import BottleIcon from '../../../../assets/bottle';
import RainDropIcon from '../../../../assets/raindrop';
import SealIcon from '../../../../assets/seal';
import styles from './styles';
import { colors } from '../../../../styles/theme';
import { setVote } from '../../../../features/voteSlice';
import { Spot } from '../../../../features/getSpotsSlice';
import CustomModal from '../../../../components/modal.component';
import CustomList from '../../../../components/list.component';
import ActionButton from '../../../../components/buttons.component/actionButton.button';
import SearchBar from '../../../../components/searchbar.component';
import { RootState } from '../../../../app/store';

interface Props {
    mode: boolean
    handleClose: () => void
    selectedSpot?: Spot
    spots?: Array<Spot>
    isSelectable: boolean
}

interface Vote {
  id: string | undefined,
  quality: {
    water: boolean,
    plastic: boolean,
    seal: boolean,
  }
}

const ModalSpot = (props: Props) => {
  const {
    mode, handleClose, selectedSpot, spots, isSelectable,
  } = props;
  const { spot } = useSelector((state: RootState) => state.spot);
  const { t } = useTranslation(['translationFR']);
  const [selection, setSelection] = useState({
    water: false,
    plastic: false,
    seal: false,
  });
  const [quality, setQuality]: any = useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    const vote: Vote = {
      id: selectedSpot?.id,
      quality: {
        water: selection.water,
        plastic: selection.plastic,
        seal: selection.seal,
      },
    };
    setQuality(vote);
  }, [selectedSpot, selection]);

  const handleStepNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleStepBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepReset = () => {
    setActiveStep(0);
  };

  const spotData = [
    {
      id: 1,
      icon: <RainDropIcon size={25} />,
      name: t('translation:mapView.dialogSpot.water'),
      onClick: () => setSelection({ ...selection, water: !selection.water }),
      check: selection.water ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },
    {
      id: 2,
      icon: <BottleIcon size={25} />,
      name: t('translation:mapView.dialogSpot.plastic'),
      onClick: () => setSelection({ ...selection, plastic: !selection.plastic }),
      check: selection.plastic ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },
    {
      id: 3,
      icon: <SealIcon size={25} />,
      name: t('translation:mapView.dialogSpot.seal'),
      onClick: () => setSelection({ ...selection, seal: !selection.seal }),
      check: selection.seal ? <CheckIcon sx={{ color: colors.goodQuality }} /> : null,
    },

  ];

  const steps = [
    {
      step: 0,
      title:
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography sx={{ fontWeight: 'bold' }}>Spot concerné</Typography>
    <Typography sx={{ margin: 1, p: 1 }}>{ activeStep !== 0 ? spot?.name : null}</Typography>
  </Box>,
      action: spots ? <SearchBar spots={spots} /> : null,
      display: isSelectable,
    },
    {
      step: 1,
      title:
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography sx={{ fontWeight: 'bold' }}>Type dalerte</Typography>
    <Box sx={{
      borderRadius: '5px', margin: 1, p: 1,
    }}
    >
      {selection.water
        ? <Chip sx={{ color: 'text.primary', pl: 1, m: 0.4 }} color="warning" variant="outlined" icon={<RainDropIcon size={20} />} label={spotData[0].name} /> : null}
      {selection.plastic
        ? <Chip sx={{ color: 'text.primary', pl: 1, m: 0.4 }} color="warning" variant="outlined" icon={<BottleIcon size={20} />} label={spotData[1].name} /> : null}
      {selection.seal
        ? <Chip sx={{ color: 'text.primary', pl: 1, m: 0.4 }} color="warning" variant="outlined" icon={<SealIcon size={20} />} label={spotData[2].name} /> : null}
    </Box>
  </Box>,
      action: <CustomList allData={spotData} />,
      display: true,
    },
    {
      step: 2,
      title: <Typography sx={{ fontWeight: 'bold' }}>Observations</Typography>,
      action: <TextField fullWidth multiline maxRows={3} placeholder="Souhaitez-vous ajouter une note ?" />,
      display: true,
    },
  ];

  const onClose = () => {
    handleClose();
    setSelection({ water: false, plastic: false, seal: false });
    handleStepReset();
  };

  const onSend = () => {
    dispatch(setVote(quality));
    onClose();
    handleStepReset();
  };

  return (
    <CustomModal
      isOpen={mode}
      size="sm"
      showActions="none"
      onCancelClick={handleClose}
      header={(
        <Typography variant="h6" sx={styles.title}>
          {t('translation:mapView.dialogSpot.title')}
        </Typography>
      )}
      content={(
        <Box sx={styles.container}>
          <Alert severity="warning">
            {selectedSpot ? (
              <Typography sx={styles.description}>
                {t('translation:mapView.dialogSpot.description', { spotName: selectedSpot.name })}
              </Typography>
            ) : (
              <Typography sx={styles.description}>
                {t('translation:mapView.dialogSpot.description2')}
              </Typography>
            )}
          </Alert>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map(((s, index) => (
              s.display ? (
                <Step key={s.step}>
                  <StepLabel>
                    {s.title}
                  </StepLabel>
                  <StepContent>
                    {s.action}
                    <Box>
                      <ActionButton
                        fullWidth={false}
                        onClick={handleStepNext}
                        title={index === steps.length - 1 ? t('translation:mapView.dialogSpot.finish') : t('translation:mapView.dialogSpot.next')}
                        isDisabled={false}
                      />
                      <ActionButton
                        fullWidth={false}
                        onClick={handleStepBack}
                        title={t('translation:mapView.dialogSpot.back')}
                        isDisabled={index === 0}
                      />
                    </Box>
                  </StepContent>
                </Step>
              ) : null
            )))}
          </Stepper>
        </Box>
      )}
      customActions={(
        <Grid container sx={styles.buttonsArea}>
          <Grid item md={6} sx={styles.centerFlex}>
            <ActionButton
              onClick={() => onClose()}
              title={(
                <Typography sx={styles.cancelButton}>
                  {t('translation:mapView.dialogSpot.cancelButton')}
                </Typography>
              )}
              isDisabled={false}
              fullWidth
            />
          </Grid>
          <Grid item md={6} sx={styles.centerFlex}>
            <ActionButton
              onClick={() => onSend()}
              title={(
                <Typography sx={styles.sendButton}>
                  {t('translation:mapView.dialogSpot.sendButton')}
                </Typography>
              )}
              isDisabled={!selection.water && !selection.plastic && !selection.seal}
              fullWidth
              sx={{ bgcolor: 'background.paper' }}
            />
          </Grid>
        </Grid>
      )}
    />
  );
};

export default ModalSpot;
