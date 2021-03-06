import React, { ReactElement, useEffect, useState } from 'react';
import {
  Box, Snackbar, Alert, Slide, SlideProps,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import SpotCard from '../spotCard.component';
import MainCard from '../mainCard.component';
import styles from './styles';
import { Spot } from '../../../../features/setSpotSlice';
import { RootState } from '../../../../app/store';

interface Props {
  selectedSpot: Spot
  onClick: () => void;
}

const DataCards = (props: Props): ReactElement => {
  const { t } = useTranslation(['translation']);
  const { selectedSpot, onClick } = props;
  const { loading } = useSelector((state: RootState) => state.vote);
  const [alert, setAlert] = useState(false);
  // eslint-disable-next-line react/jsx-props-no-spreading
  const Transition = (slideProps: SlideProps): ReactElement => <Slide {...slideProps} direction="right" />;

  useEffect(() => {
    if (loading) {
      setAlert(true);
    }
  }, [loading]);
  return (
    <Box sx={styles.dataCards}>
      <MainCard onClick={onClick} />
      {selectedSpot.id ? (
        <motion.div
          animate={{ translateX: 400 }}
          transition={{ duration: 0.5 }}
          initial="hidden"
          variants={{ hidden: { x: -400 } }}
        >
          <SpotCard selectedSpot={selectedSpot} />
        </motion.div>
      ) : null}
      <Snackbar
        open={alert}
        autoHideDuration={6000}
        onClose={() => setAlert(false)}
        TransitionComponent={Transition}
      >
        <Alert severity="success" onClose={() => setAlert(false)} sx={{ width: '100%' }}>
          {t('translation:mapView.spotCard.stackMessage')}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DataCards;
