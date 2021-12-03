import React from 'react';
import { IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { MdMenu } from 'react-icons/md';
import styles from '../styles';

interface Props {
    onClick: () => void;
}

const MainButton = (props: Props) => {
  const { onClick } = props;
  return (
    <Box sx={styles.button} onClick={onClick}>
      <IconButton sx={{ bgcolor: 'background.default' }}>
        <MdMenu size={32} color="text.default" />
      </IconButton>
    </Box>
  );
};

export default MainButton;
