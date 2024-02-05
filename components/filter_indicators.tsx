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
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface ConfirmationDialogRawProps {
  
  onClose: (arg0:any) => void;
  open: boolean;
}

export default function FilterIndicators(props: ConfirmationDialogRawProps) {
  const { onClose,  ...other } = props;
  const [open, setOpen] = useState(true);
  const [year, setYear] = React.useState<DialogProps['year']>(2020);
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
  const handleClose = () => {
    setOpen(false);
};

  const handleYearChange = (event: SelectChangeEvent<typeof year>) => {
    setYear(
      
      event.target.value,
    );
  };
  const handleApply = () => {
    const ChosenIndicators ={year,indicators}
    
    onClose(ChosenIndicators);
    setOpen(false);

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
        onClose={handleClose}
      >
        <DialogTitle>Indicators</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Select the year & indicators:
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
              <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">Year</InputLabel>
              <Select
                autoFocus
                value={year}
                onChange={handleYearChange}
                label="year"
                inputProps={{
                  name: 'year',
                  id: 'year',
                }}
              >
                <MenuItem value={false as any}>false</MenuItem>
                <MenuItem value="2022">2022</MenuItem>
                <MenuItem value="2021">2021</MenuItem>
                <MenuItem value="2020">2020</MenuItem>
                <MenuItem value="2019">2019</MenuItem>
                <MenuItem value="2018">2018</MenuItem>
                <MenuItem value="2017">2017</MenuItem>
                <MenuItem value="2016">2016</MenuItem>
                <MenuItem value="2015">2015</MenuItem>
                <MenuItem value="2014">2014</MenuItem>
                <MenuItem value="2013">2013</MenuItem>
                <MenuItem value="2012">2012</MenuItem>
              </Select>
            </FormControl>
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
