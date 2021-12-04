import React, { ReactElement } from 'react';
import {
  Drawer, IconButton, Box, styled,
} from '@mui/material';
import { MdChevronRight } from 'react-icons/md';

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const ContentView = (props: Props): ReactElement => {
  const { isOpen, onClose } = props;
  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <DrawerHeader>
        <IconButton onClick={onClose}>
          <MdChevronRight />
        </IconButton>
      </DrawerHeader>
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
