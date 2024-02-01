'use client'
import * as React from 'react';
import { useState } from 'react';
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

export default function FilterCountry() {
  const [open, setOpen] = useState(false);
  const [countrySwitches, setCountrySwitches] = useState({
    Seychelles: false,
    Maldives: false,
    "Côte d'Ivoire": false,
    Kenya: false,
    "Sri Lanka": false,
    India: false,
    Singapore: false,
    Australia: false,
    Denmark: false,
    Finland: false,
  });
  


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSwitchChange = (country: keyof typeof countrySwitches) => {
    setCountrySwitches((prevSwitches) => ({
      ...prevSwitches,
      [country]: !prevSwitches[country],
    }));
  };

  const handleApply = () => {
    // You can use countrySwitches state here for further actions
    handleClose();
    console.log(countrySwitches)
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        COUNTRY FILTER
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>COUNTRY: </DialogTitle>
        <DialogContent>
          <DialogContentText>CHOOSE COUNTRY :</DialogContentText>
          <FormGroup>
            {Object.entries(countrySwitches).map(([country, checked]) => (
              <FormControlLabel
                key={country}
                control={
                  <Switch
                    checked={checked}
                    onChange={() => handleSwitchChange(country)}
                  />
                }
                label={country}
              />
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleApply}>
            APPLY
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
