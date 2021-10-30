import * as React from 'react';
import InputBase from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box } from '@mui/material';

const surfSpots = [
  { label: 'Penfoul', id: 1 },
  { label: 'Lampaul', id: 2 },
];

const SearchBar = () => (
  <Box sx={{
    borderRadius: 10, bgcolor: 'background.paper', zIndex: 10, position: 'absolute', top: 0, right: '40%', margin: 5,
  }}
  >
    <Autocomplete
      disablePortal
      id="search-bar"
      options={surfSpots}
      sx={{ width: 500, border: 'red' }}
            // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => (
        <InputBase
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          placeholder="Chercher un spot"
        />
      )}
    />
  </Box>

);

export default SearchBar;
