import React, { useState } from 'react';
import { Campaign } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { Spot } from '../../../../features/getSpotsSlice';
import { colors } from '../../../../styles/theme';
import ModalSpot from '../modalSpot.component';

type Props = {
    spots: Array<Spot>
}

const ReportButton = (props: Props) => {
  const { spots } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Fab
        sx={{
          bgcolor: colors.badQuality,
          position: 'absolute',
          bottom: 60,
          right: 10,
          '&.MuiButtonBase-root:hover': {
            bgcolor: colors.badQuality,
          },
        }}
        onClick={() => handleOpen()}
      >
        <Campaign sx={{ color: 'white' }} />
      </Fab>
      <ModalSpot
        isSelectable
        spots={spots}
        mode={open}
        handleClose={() => handleClose()}
      />
    </Box>
  );
};

export default ReportButton;
