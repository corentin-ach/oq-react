import React, { ReactElement } from 'react';
import { Box, Drawer } from '@mui/material';

interface Props {
  isOpen: boolean;
  content: ReactElement;
  onClose: () => void;
}

const SideBar = (props: Props): ReactElement => {
  const { isOpen, content, onClose } = props;
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
        {content}
      </Box>
    </Drawer>
  );
};

export default SideBar;
