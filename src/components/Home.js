import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Tabs, Tab, Button, OutlinedInput, MenuItem, FormControl, Select, IconButton, Grid, InputAdornment, Container, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// import component
import Search from './Search';
import Isi from './Isi';
import Coba from './Coba';

// icon
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

// punya expand
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

// punya tabs
const StyledTabs = styled((props) => <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />)({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 50,
    width: '90%',
    backgroundColor: '#249EA0',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: '#000',
  '&.Mui-selected': {
    color: '#249EA0',
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#249EA0',
  },
}));

export default function Home() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const onTabClicked = (event, newValue) => {
    setValue(newValue);
  };

  // punya expand yang bawah

  const [kota, setPersonName] = React.useState([]);

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
    <>
      {/* search */}
      <Search />

      {/* tabs */}
      <Box sx={{ width: '100%', mt: 3, fontWeight: 'bold' }}>
        <StyledTabs value={value} onChange={onTabClicked} aria-label="styled tabs example" centered>
          <StyledTab value="one" label="Terdekat" />
          <StyledTab value="two" label="Terpopuler" />
          <StyledTab value="three" label="Bandingkan" />
          <StyledTab value="four" label="Peta" />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
      {/* <Box>
        <Tabs value={value} onChange={onTabClicked} textColor="primary" indicatorColor="primary" aria-label="primary tabs example" centered>
          <Tab style={{ color: '#249EA0' }} value="one" label="Terdekat" />
          <Tab style={{ color: '#249EA0' }} value="two" label="Terpopuler" />
          <Tab style={{ color: '#249EA0' }} value="three" label="Bandingkan" />
          <Tab style={{ color: '#249EA0' }} value="four" label="Peta" />
        </Tabs>
      </Box> */}

      {/* expand */}

      <Container>
        <Box sx={{ mt: -6, mb: 3 }}>
          <Grid container direction="row" alignItems={'center'} justifyContent={'center'}>
            <FormControl
              sx={{
                p: 2,
                m: 1,
                mt: 3,
                width: '50%',
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  border: 'solid #cccccc',
                  borderRadius: 9,
                },
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#cccccc',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#cccccc',
                },
              }}
            >
              <Select
                sx={{
                  borderColor: '#cccccc',
                  borderRadius: 9,
                  bgcolor: '#f2f2f2',
                  borderRadius: 9,
                }}
                displayEmpty
                value={kota}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                          <AddLocationIcon sx={{ mr: 1, color: ' #F78104' }} />
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
                  <MenuItem key={name} value={name} style={getStyles(name, kota, theme)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <IconButton>
              <MyLocationIcon sx={{ fontSize: 30, color: '#000', mt: 1 }} />
            </IconButton>
          </Grid>
        </Box>
      </Container>

      {/* Isi */}
      <Isi />

      {/* Button */}
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, bgcolor: 'warning' }}>
        <Grid container justifyContent="right">
          <Grid item align="right">
            <Button
              variant="contained"
              color="warning"
              sx={{
                mt: 2,
                mr: 2,
                borderRadius: '50%',
              }}
            >
              <IconButton sx={{ color: 'white', height: 60 }}>
                <ArrowForwardIcon />
              </IconButton>
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* <Coba /> */}
    </>
  );
}
