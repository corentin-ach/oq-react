import {
  Dialog, DialogContent, DialogTitle, DialogActions, Breakpoint, Button, Typography,
} from '@mui/material';
import React, { ReactElement } from 'react';
import styles from './styles';

type ModalProps = {
    isOpen: boolean;
    size: false | Breakpoint | undefined;
    header: ReactElement;
    content: ReactElement;
    onCancelClick: () => void;
    showActions: string;
    customActions: ReactElement | null
}

const CustomModal = (props: ModalProps) => {
  const {
    isOpen,
    size,
    header,
    content,
    onCancelClick,
    showActions,
    customActions,
  } = props;

  return (
    <Dialog open={isOpen} maxWidth={size} fullWidth keepMounted>
      <DialogTitle sx={styles.container}>
        {header}
      </DialogTitle>
      <DialogContent sx={styles.container}>
        {content}
        {customActions || null}
      </DialogContent>
      <DialogActions sx={{ display: showActions }}>
        <Button onClick={onCancelClick}><Typography>Annuler</Typography></Button>
        <Button><Typography>Confirmer</Typography></Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
