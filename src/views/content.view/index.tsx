import React, { ReactElement } from 'react';
import {
  Drawer, IconButton, Box, styled, Tab,
} from '@mui/material';
import { MdChevronRight } from 'react-icons/md';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import Stats from './components/stats.component';
import { Spot } from '../../features/getSpotsSlice';
import About from './components/about.component';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    spots: Array<Spot>;
    value: string;
    handleChange: any;
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
  const {
    isOpen, onClose, spots, value, handleChange,
  } = props;
  const { t } = useTranslation(['translation']);

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      <TabContext value={value}>
        <DrawerHeader sx={{ bgcolor: 'background.default' }}>
          <IconButton onClick={onClose}>
            <MdChevronRight />
          </IconButton>
          <TabList
            onChange={handleChange}
          >
            <Tab label="Oavel" value="1" sx={{ fontWeight: 'bold' }} />
            <Tab label={t('translation:contentView.tab.stats')} value="2" sx={{ fontWeight: 'bold' }} />
          </TabList>
        </DrawerHeader>
        <Box sx={{
          width: 380,
          height: '200%',
          bgcolor: 'background.default',
          padding: 2,
        }}
        >
          <TabPanel value="1">
            <About />
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
