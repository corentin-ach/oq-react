import {
  Typography, Box, Grid, Stepper, StepLabel, Step, StepContent, TextField, Chip, Alert,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';
import dayjs from 'dayjs';
import BottleIcon from '../../../../assets/bottle';
import RainDropIcon from '../../../../assets/raindrop';
import SealIcon from '../../../../assets/seal';
import styles from './styles';
import { colors } from '../../../../styles/theme';
import { Spot } from '../../../../features/getSpotsSlice';
import CustomModal from '../../../../components/modal.component';
import CustomList from '../../../../components/list.component';
import ActionButton from '../../../../components/buttons.component/actionButton.button';
import SearchBar from '../../../../components/searchbar.component';
import { setFirestore } from '../../../../firebase/hooks';

interface Props {
    mode: boolean
    handleClose: () => void
    spots?: Array<Spot>
    isSelectable: boolean
    spot: Spot
}

interface Vote {
  id: string | undefined,
  quality: {
    water: boolean,
    plastic: boolean,
    seal: boolean,
    observation: string,
    date: string
  }
}

const ModalSpot = (props: Props) => {
  const {
    mode, handleClose, spots, isSelectable, spot,
  } = props;
  const { t } = useTranslation(['translationFR']);
  const [selection, setSelection] = useState({
    water: false,
    plastic: false,
    seal: false,
    observation: '',
    date: '',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelection({ ...selection, observation: event.target.value });
  };
  const [quality, setQuality]: any = useState({});
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    const vote: Vote = {
      id: spot?.id,
      quality: {
        water: selection.water,
        plastic: selection.plastic,
        seal: selection.seal,
        observation: selection.observation,
        date: dayjs(new Date()).format('YYYY-MM-DD'),
      },
    };
    setQuality(vote);
  }, [spot, selection]);

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
    <Typography sx={{ fontWeight: 'bold' }}>{activeStep <= 0 ? t('translation:mapView.dialogSpot.spotConcerned') : spot?.name}</Typography>
  </Box>,
      action: spots ? <SearchBar spots={spots} /> : null,
      display: isSelectable,
    },
    {
      step: 1,
      title:
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography sx={{ fontWeight: 'bold' }}>{t('translation:mapView.dialogSpot.alertType')}</Typography>
    <>
      <Box sx={{
        borderRadius: '5px', margin: 1, p: 1,
      }}
      >
        {selection.water
          ? <Chip sx={{ color: 'text.primary', m: 0.4, paddingLeft: 1 }} color="warning" variant="outlined" icon={<RainDropIcon size={20} />} label={spotData[0].name} /> : null}
        {selection.plastic
          ? <Chip sx={{ color: 'text.primary', m: 0.4, paddingLeft: 1 }} color="warning" variant="outlined" icon={<BottleIcon size={20} />} label={spotData[1].name} /> : null}
        {selection.seal
          ? <Chip sx={{ color: 'text.primary', m: 0.4, paddingLeft: 1 }} color="warning" variant="outlined" icon={<SealIcon size={20} />} label={spotData[2].name} /> : null}
      </Box>
    </>
  </Box>,
      action: <CustomList allData={spotData} />,
      display: true,
    },
    {
      step: 2,
      title: <Typography sx={{ fontWeight: 'bold' }}>{t('translation:mapView.dialogSpot.observations')}</Typography>,
      action: <TextField onChange={handleChange} value={selection.observation} fullWidth multiline maxRows={3} placeholder="Souhaitez-vous ajouter une note ?" />,
      display: true,
    },
  ];

  const onClose = () => {
    handleClose();
    setSelection({
      water: false, plastic: false, seal: false, observation: '', date: '',
    });
    handleStepReset();
  };

  const onSend = () => {
    setFirestore('spots', quality, spot);
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
            {spot ? (
              <Typography sx={styles.description}>
                {t('translation:mapView.dialogSpot.description', { spotName: spot?.name })}
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
                      {index < steps.length - 1 ? (
                        <ActionButton
                          fullWidth={false}
                          onClick={handleStepNext}
                          title={t('translation:mapView.dialogSpot.next')}
                          isDisabled={false}
                        />
                      ) : null}
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
