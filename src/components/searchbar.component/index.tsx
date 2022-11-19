import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setSpot } from '../../features/setSpotSlice';
import { Spot } from '../../types';

interface Props {
    spots: Array<Spot>;
}

const SearchBar = (props: Props) => {
  const { spots } = props;
  const dispatch = useDispatch();
  const listSpots = spots.map((spot) => (
    { ...spot, label: spot.name }
  ));
  const { t } = useTranslation();

  const displaySpotOnClick = (value: any) => {
    if (value) {
      dispatch(setSpot({
        id: value.id,
        bySearch: true,
      }));
    }
  };

  return (
    <Autocomplete
      disablePortal
      size="small"
      options={listSpots}
      sx={{ width: '50%' }}
      onChange={(event, value) => displaySpotOnClick(value)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} label={t('translation:mapView.header.searchBar')} />}
    />
  );
};

export default SearchBar;
