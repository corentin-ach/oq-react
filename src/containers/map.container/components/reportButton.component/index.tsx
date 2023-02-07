import React, { useState } from 'react';
import { Campaign } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { colors } from '../../../../styles/theme';
import ModalSpot from '../modalSpot.component';
import { Spot } from '../../../../types';

type Props = {
    spots: Array<Spot>
    spot: Spot,
    style?: any
}

const ReportButton = (props: Props) => {
  const { spots, spot, style } = props;
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
          ...style,
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
        spot={spot}
        mode={open}
        handleClose={() => handleClose()}
      />
    </Box>
  );
};

export default ReportButton;
