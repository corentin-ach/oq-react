import React from 'react';
import {
  Box, IconButton, Menu, MenuItem,
} from '@mui/material';
import { MdAccountCircle } from 'react-icons/md';
import styles from '../styles';

function ProfileButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={styles.button}>
      <IconButton onClick={handleClick}>
        <MdAccountCircle size={32} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Login</MenuItem>
      </Menu>
    </Box>
  );
}

export default ProfileButton;
