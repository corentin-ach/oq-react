import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Spot } from '../../features/getSpotsSlice';
import { setSpot } from '../../features/setSpotSlice';

interface Props {
    spots: Array<Spot>;
}

const SearchBar = (props: Props) => {
  const { spots } = props;
  const dispatch = useDispatch();
  const listSpots = spots.map((spot) => (
    { ...spot, label: spot.name }
  ));

  const displaySpotOnClick = (value: any) => {
    if (value) {
      dispatch(setSpot({
        id: value.id,
        name: value.name,
        water: value.quality.water,
        plastic: value.quality.plastic,
        seal: value.quality.seal,
        date: value.quality.date,
        status: value.status,
      }));
    }
  };

  return (
    <Autocomplete
      disablePortal
      size="small"
      options={listSpots}
      sx={{ width: 400 }}
      onChange={(event, value) => displaySpotOnClick(value)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => <TextField {...params} label="Rechercher une plage" />}
    />
  );
};

export default SearchBar;
