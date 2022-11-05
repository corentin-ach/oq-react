import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './styles';

type Props = {
    allData: Array<Record<string, any>>
}

const CustomList = (props: Props) => {
  const { allData } = props;

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

  return (
    <Box>
      {allData.map((data) => (
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
    </Box>
  );
};

export default CustomList;
