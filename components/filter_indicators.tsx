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

export default function FilterIndicators() {
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
         INDICATORS FILTER
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Indicators</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the indicators :

          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormGroup>
                <FormControlLabel control={<Checkbox  />} label="Total fisheries production" />
                <FormControlLabel control={<Checkbox  />} label="Agricultural land" />
                <FormControlLabel control={<Checkbox  />} label="Time required to start a business" />
                <FormControlLabel control={<Checkbox  />} label="New businesses registered" />
                <FormControlLabel control={<Checkbox  />} label="Employment in agriculture (% of total employment)" />
                <FormControlLabel control={<Checkbox  />} label="Self-employed, total (% of total employment)" />
                <FormControlLabel control={<Checkbox  />} label="Corruption Perception Index " />
                </FormGroup>
          </Box>
            </DialogContent>
        <DialogActions>
          
          <Button autoFocus onClick={handleClose}>APPLY</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}