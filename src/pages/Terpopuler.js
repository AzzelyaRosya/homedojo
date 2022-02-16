import React from 'react';
import { Box, Button, OutlinedInput, MenuItem, FormControl, Select, IconButton, Grid, InputAdornment, Container, TextField, Typography, ListItemIcon, ListItemText } from '@mui/material';
import Isi from '../components/Isi';

// icon
import MyLocationIcon from '@mui/icons-material/MyLocation';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const names = ['Bekasi, Jawa Barat', 'Jakarta, DKI Jakarta', 'Semarang, Jawa Tengah', 'Surabaya, Jawa Timur', 'Yogyakarta, Jawa Tengah', 'Cirebon, Jawa Barat', 'Bandung, Jawa Barat'];

export default function Terpopuler() {
  const [kota, setPersonName] = React.useState([]);

  const onTabClicked = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };
  return (
    <>
      <Box sx={{ mt: -10, mb: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FormControl
            sx={{
              m: 1,
              mt: 3,

              width: '90%',
              '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                borderRadius: 9,
              },
              '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                borderColor: '#eeeeee',
              },
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#eeeeee',
              },
            }}
          >
            <Select
              sx={{
                borderColor: '#eeeeee',
                borderRadius: 9,
                bgcolor: '#f5f5f5',
              }}
              displayEmpty
              value={kota}
              onChange={onTabClicked}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton>
                        <box-icon type="solid" name="map" color="orange"></box-icon>
                      </IconButton>
                      <em style={{ color: 'grey' }}>Temukan Kota</em>
                    </div>
                  );
                }

                return selected.join(', ');
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem disabled value="">
                <em>Search Place</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name} sx={{ mr: 10 }}>
                  <box-icon type="solid" name="map" color="orange"></box-icon>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <IconButton>
            <MyLocationIcon sx={{ fontSize: 30, color: '#000', mt: 1 }} />
          </IconButton>
        </div>
      </Box>

      <Isi />
    </>
  );
}
