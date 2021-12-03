import React, { ReactElement } from 'react';
import { Drawer } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const ContentView = (props: Props): ReactElement => {
  const { isOpen, onClose } = props;
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <Box sx={{
        width: 400,
        height: '100%',
        bgcolor: 'background.default',
      }}
      >
        <p>test</p>
      </Box>
    </Drawer>
  );
};

export default ContentView;
