import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import SpotCard from '../spotCard.component';
import MainCard from '../mainCard.component';
import styles from './styles';
import { Spot } from '../../../../features/setSpotSlice';

interface Props {
  selectedSpot: Spot
  onClick: () => void;
}

const DataCards = (props: Props): ReactElement => {
  const { selectedSpot, onClick } = props;
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
    </Box>
  );
};

export default DataCards;
