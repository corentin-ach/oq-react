import React, { ReactElement } from 'react';
import {
  Drawer, IconButton, Box, styled, Tab,
} from '@mui/material';
import { MdChevronRight } from 'react-icons/md';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { PieChart } from '@mui/icons-material';
import Login from './components/login.component';
import Stats from './components/stats.component';
import About from './components/about.component';
import InfoSpot from './components/infoSpot.component';
import { Spot } from '../../types';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    spots: Array<Spot>;
    spot: Spot;
    value: string;
    handleChange: any;
    isDark: boolean;
    showInfoSpot: () => void;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function ContentContainer(props: Props) {
  const {
    isOpen, onClose, spots, value, handleChange, isDark, showInfoSpot, spot,
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
            <Tab label="Login" value="4" sx={{ fontWeight: 'bold' }} />
            <Tab label="Oavel" value="1" sx={{ fontWeight: 'bold' }} />
            <Tab icon={<PieChart />} iconPosition="start" label={t('translation:contentView.tab.stats')} value="2" sx={{ fontWeight: 'bold' }} />
            {spot ? <Tab label={spot?.name} value="3" sx={{ fontWeight: 'bold' }} /> : null}
          </TabList>
        </DrawerHeader>
        <Box sx={{
          width: 380,
          height: '450%',
          bgcolor: 'background.default',
          padding: 1,
        }}
        >
          <TabPanel value="4">
            <Login />
          </TabPanel>
          <TabPanel value="1">
            <About />
          </TabPanel>
          <TabPanel value="2">
            <Stats spots={spots} />
          </TabPanel>
          <TabPanel value="3">
            <InfoSpot showInfoSpot={() => showInfoSpot()} spot={spot} isDark={isDark} />
          </TabPanel>
        </Box>
      </TabContext>
    </Drawer>
  );
}
