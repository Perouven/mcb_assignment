'use client'
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export interface ConfirmationDialogRawProps {
  
  onClose: (arg0:any) => void;
  open: boolean;
}

export default function FilterIndicators(props: ConfirmationDialogRawProps) {
  const { onClose,  ...other } = props;
  const [open, setOpen] = useState(false);
  const [indicators, setIndicators] = useState({
    "fisheries_production": false,
    "agricultural_land": false,
    "time_to_start_business": false,
    "new business registered": false,
    "employment in agriculture": false,
    "self employed": false,
    "cpi": false
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleApply = () => {
    onClose(indicators);
    setOpen(false);
    console.log(indicators)
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIndicators({
      ...indicators,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        INDICATORS FILTER
      </Button>
      <Dialog
        open={open}
        onClose={handleApply}
      >
        <DialogTitle>Indicators</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the indicators:
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
            {Object.entries(indicators).map(([key, value]) => (
              <FormControlLabel
                key={key}
                control={
                  <Checkbox
                    name={key}
                    checked={value}
                    onChange={handleChange}
                  />
                }
                label={key}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleApply}>APPLY</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
