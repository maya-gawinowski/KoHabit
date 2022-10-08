import * as React from 'react';
import { useState } from "react";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
         
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ChangeEmail() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if(newEmail!==email){
      console.log("erreur email");
    }
    else{
      console.log("new email : "+email);
      setOpen(false);
    }
  }

  const [email, setEmail] = useState();
  const [newEmail, setNewEmail] = useState();

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Change Email
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Change your email
        </BootstrapDialogTitle>
        <DialogContent dividers>
            <div class='form'>
                <label>
                    New email <br />
                    <input type="text" name="pwd" onChange={(e) => setEmail(e.target.value)} required/>
                </label><br />
                <label>
                    Enter it again <br />
                    <input type="text" name="checkpwd" onChange={(e) => setNewEmail(e.target.value)} required/>
                </label><br />
                <button class="button_form" onClick={handleSubmit}>
                    Save
                </button>
            </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
