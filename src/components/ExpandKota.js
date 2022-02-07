import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { OutlinedInput, MenuItem, FormControl, Select, IconButton, Grid } from '@mui/material';

// icon
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['Bekasi, Jawa Barat', 'Jakarta, DKI Jakarta', 'Semarang, Jawa Tengah', 'Surabaya, Jawa Timur', 'Yogyakarta, Jawa Tengah', 'Cirebon, Jawa Barat', 'Bandung, Jawa Barat'];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

export default function ExpandKota() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <div>
      <Grid container direction="row" centered>
        <FormControl
          sx={{
            m: 1,
            width: 500,
            mt: 3,
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        >
          <Select
            sx={{
              border: '#249EA0',
              borderRadius: 7,
              bgcolor: '#e6e6e6',
              borderRadius: 5,
            }}
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em style={{ color: 'grey' }}>Search Place</em>;
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
              <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Grid item xs={1} sx={{ m: 1, mt: 4 }}>
          <IconButton>
            <MyLocationIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
