import React from 'react';
import { QuestionMark } from '@mui/icons-material';
import { Fab } from '@mui/material';

type Props = {
    openSidebar: () => void;
}

const InfoButton = (props: Props) => {
  const { openSidebar } = props;
  return (
    <Fab
      sx={{
        bgcolor: 'background.paper',
        position: 'absolute',
        bottom: 130,
        right: 10,
        '&.MuiButtonBase-root:hover': {
          bgcolor: 'background.paper',
        },
      }}
      onClick={() => openSidebar()}
    >
      <QuestionMark sx={{ color: 'text.primary' }} />
    </Fab>
  );
};

export default InfoButton;
