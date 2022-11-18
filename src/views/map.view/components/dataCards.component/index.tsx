import React, { ReactElement } from 'react';
import {
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';
import SpotCard from '../spotCard.component';
import MainCard from '../mainCard.component';
import styles from './styles';
import { Spot } from '../../../../features/getSpotsSlice';

interface Props {
  spot: Spot
  onClick: () => void;
  isDark: boolean;
  spots: Array<Spot>;
  showInfoSpot: () => void;
}

const DataCards = (props: Props): ReactElement => {
  const {
    spot, onClick, isDark, spots, showInfoSpot,
  } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading

  return (
    <Box sx={styles.dataCards}>
      <MainCard spots={spots} onClick={onClick} isDark={isDark} />

      {spot?.id ? (
        <motion.div
          animate={{ translateX: 400 }}
          transition={{ duration: 0.5 }}
          initial="hidden"
          variants={{ hidden: { x: -400 } }}
        >
          <SpotCard
            showInfoSpot={() => showInfoSpot()}
            spot={spot}
            isDark={isDark}
            isExpandedCard={false}
          />
        </motion.div>
      ) : (
        <motion.div
          animate={{ translateX: -400 }}
          transition={{ duration: 0.3 }}
          initial="hidden"
          variants={{ hidden: { x: -400 } }}
        >
          <SpotCard
            showInfoSpot={() => showInfoSpot()}
            spot={spot}
            isDark={isDark}
            isExpandedCard={false}
          />
        </motion.div>
      )}

    </Box>
  );
};

export default DataCards;
