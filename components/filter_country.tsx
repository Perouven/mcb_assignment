'use client'
import * as React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function FilterCountry() {
  const [open, setOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState<DialogProps['maxWidth']>('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
         COUNTRY FILTER
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>COUNTRY: </DialogTitle>
        <DialogContent>
          <DialogContentText>
            CHOOSE COUNTRY :

          </DialogContentText>
           <FormGroup>
                <FormControlLabel control={<Switch  />} label="Seychelles" />
                <FormControlLabel control={<Switch  />} label="Maldives" />
                <FormControlLabel control={<Switch  />} label="Côte d'Ivoire" />
                <FormControlLabel control={<Switch  />} label="Kenya" />
                <FormControlLabel control={<Switch  />} label="Sri Lanka" />
                <FormControlLabel control={<Switch  />} label="India" />
                <FormControlLabel control={<Switch  />} label="Singapore" />
                <FormControlLabel control={<Switch  />} label="Australia" />
                <FormControlLabel control={<Switch  />} label="Denmark" />
                <FormControlLabel control={<Switch  />} label="Finland" />
            </FormGroup>
            </DialogContent>
        <DialogActions>
          
          <Button autoFocus onClick={handleClose}>APPLY</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}