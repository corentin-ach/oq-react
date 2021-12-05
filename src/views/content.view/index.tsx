import React, { useEffect } from 'react';
import {
  Drawer, IconButton, Box, styled,
} from '@mui/material';
import { MdChevronRight } from 'react-icons/md';
import 'react-notion-x/src/styles.css';
import { NotionRenderer } from 'react-notion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { getNotion } from '../../features/getNotionSlice';

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

const ContentView = (props: Props) => {
  const { isOpen, onClose } = props;
  const { notion } = useSelector((state: RootState) => state.notion);
  console.log(notion);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getNotion()); }, []);
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
        <NotionRenderer blockMap={notion?.block} fullPage />
      </Box>
    </Drawer>
  );
};

export default ContentView;
