import React, { ReactElement } from 'react';
import {
  Drawer, IconButton, Box, styled, Tab,
} from '@mui/material';
import { MdChevronRight } from 'react-icons/md';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Stats from './components/stats.component';
import { Spot } from '../../features/getSpotsSlice';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    spots: Array<Spot>;
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
  const { isOpen, onClose, spots } = props;
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <TabContext value={value}>
        <DrawerHeader>
          <IconButton onClick={onClose}>
            <MdChevronRight />
          </IconButton>
          <TabList onChange={handleChange}>
            <Tab label="Oavel" value="1" sx={{ fontWeight: 'bold' }} />
            <Tab label="Statistiques" value="2" sx={{ fontWeight: 'bold' }} />
          </TabList>
        </DrawerHeader>
        <Box sx={{
          width: 380,
          height: '100%',
          bgcolor: 'background.default',
          padding: 2,
        }}
        >
          <TabPanel value="1">
            <p>test</p>
          </TabPanel>
          <TabPanel value="2">
            <Stats spots={spots} />
          </TabPanel>
        </Box>
      </TabContext>
    </Drawer>
  );
};

export default ContentView;
