import React, { useState } from 'react';
import Header from '../../components/header.component';
import { Spot } from '../../types';
import MapContainer from '../../containers/map.container';
import ContentContainer from '../../containers/content.container';

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
        openSidebar={() => { setContentView(true); setValue('1'); }}
        onIntroClick={() => { setContentView(true); setValue('2'); }}
        showInfoSpot={() => { setContentView(true); setValue('3'); }}
        spots={spots}
        loading={spots.length === 0}
        spot={spot}
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
