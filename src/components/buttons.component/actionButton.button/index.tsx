import { Button } from '@mui/material';
import { SxProps, Theme } from '@mui/system';
import React, { ReactElement } from 'react';

interface Props {
    title: ReactElement | string;
    onClick: () => void;
    isDisabled: boolean;
    sx?: SxProps<Theme>;
    fullWidth: boolean;
}

const ActionButton = (props: Props) => {
  const {
    title, onClick, isDisabled, sx, fullWidth,
  } = props;
  return (
    <Button
      disabled={isDisabled}
      size="large"
      fullWidth={fullWidth}
      sx={{
        ...sx, textTransform: 'none', height: '50px', borderRadius: 2,
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ActionButton;
