import React, { useState } from 'react';
import Header from '../../components/header.component';
import { Spot } from '../../types';
import MapContainer from '../../containers/map.container';
import ContentContainer from '../../containers/content.container';
import ReportButton from '../../containers/map.container/components/reportButton.component';
import InfoButton from '../../containers/map.container/components/infoButton.component';
import DataCards from '../../containers/map.container/components/dataCards.component';

interface Props {
    isDark: boolean,
    spot: Spot,
    spots: Array<Spot>
}

export default function MainView(props: Props) {
  const { isDark, spot, spots } = props;
  const [contentView, setContentView] = useState(false);
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <Header spots={spots} theme={isDark} onMainButton={() => { setContentView(true); setValue('1'); }} />
      <MapContainer
        isDark={isDark}
        spots={spots}
        loading={spots.length === 0}
        spot={spot}
      />
      <ReportButton spots={spots} spot={spot} />
      <InfoButton openSidebar={() => { setContentView(true); setValue('1'); }} />
      <DataCards
        showInfoSpot={() => { setContentView(true); setValue('3'); }}
        spots={spots}
        spot={spot}
        onClick={() => { setContentView(true); setValue('2'); }}
        isDark={isDark}
      />
      <ContentContainer
        isOpen={contentView}
        onClose={() => setContentView(false)}
        showInfoSpot={() => { setContentView(true); setValue('3'); }}
        spots={spots}
        value={value}
        handleChange={handleChange}
        isDark={isDark}
        spot={spot}
      />
    </>
  );
}
