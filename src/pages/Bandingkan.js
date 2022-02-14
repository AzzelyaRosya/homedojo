import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Button, OutlinedInput, MenuItem, FormControl, Select, IconButton, Grid, InputAdornment, Container, TextField, Typography, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import Search from '../components/Search';
import Isi from '../components/Isi';
import Coba from '../components/Coba';

// icon
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// punya expand
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

// punya tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const StyledTabs = styled((props) => <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />)({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 100,
    width: '100%',
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // punya expand yang bawah

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
      {/* search */}
      <Search />

      {/* tabs */}

      <Box sx={{ mt: 3, fontWeight: 'bold' }}>
        <StyledTabs value={value} onChange={handleChange} variant="fullWidth" aria-label="full width tabs example" centered>
          <StyledTab label="Terdekat" {...a11yProps(0)} />
          <StyledTab label="Terpopuler" {...a11yProps(1)} />
          <StyledTab label="Bandingkan" {...a11yProps(2)} />
          <StyledTab label="Peta" {...a11yProps(3)} />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>

      <TabPanel value={value} index={0}>
        <Isi />
        {/* <Coba /> */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        Terpopuler
      </TabPanel>

      <TabPanel value={value} index={2}>
        {/* expand */}

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

        {/* Isi */}
        <Isi />

        {/* Button */}
        <Box fixed sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, bgcolor: 'warning' }}>
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
      </TabPanel>

      <TabPanel value={value} index={3}>
        Peta
      </TabPanel>
    </>
  );
}
