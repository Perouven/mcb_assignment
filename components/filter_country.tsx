'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';

export interface FilterCountryProps {
  onSave: (countrySwitches: Record<string, boolean>) => void;
}

export default function FilterCountry({ onSave }: FilterCountryProps) {
const [open, setOpen] = useState(true);
const [countrySwitches, setCountrySwitches] = useState({
    Seychelles: false,
    Maldives: false,
    "Cote d'Ivoire": false,
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
    onSave(countrySwitches);
    handleClose();
};

return (
    <React.Fragment>
    <Button variant="outlined" onClick={handleClickOpen}>
        COUNTRY FILTER
    </Button>
    <Dialog fullWidth open={open} onClose={handleClose}>
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
