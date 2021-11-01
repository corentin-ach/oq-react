import * as React from 'react';
// import InputBase from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Box, TextField } from '@mui/material';

const surfSpots = [
  { label: 'Penfoul', id: 1 },
  { label: 'Lampaul', id: 2 },
];

const SearchBar = () => (
  <Box sx={{
    bgcolor: 'background.paper', zIndex: 10, position: 'absolute', top: 0, right: '20%', margin: 5,
  }}
  >
    <Autocomplete
      disablePortal
      id="search-bar"
      options={surfSpots}
      sx={{ width: 300, border: 'red' }}
            // eslint-disable-next-line react/jsx-props-no-spreading
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          placeholder="Chercher une plage"
        />
      )}
    />
  </Box>

);

export default SearchBar;
