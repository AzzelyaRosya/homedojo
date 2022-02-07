import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Tabs, Tab, Typography, OutlinedInput, MenuItem, FormControl, Select, IconButton, Grid } from '@mui/material';

// import component
import Search from './Search';
import TabsCreate from './TabsCreate';
import ExpandKota from './ExpandKota';
import Buttons from './Buttons';
import CustomizedTabs from './Coba';

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

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Search />
      <Box sx={{ width: '100%', mt: 3 }}>
        <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="primary tabs example" centered>
          <Tab style={{ color: '#249EA0' }} value="one" label="Terdekat" />
          <Tab style={{ color: '#249EA0' }} value="two" label="Terpopuler" />
          <Tab style={{ color: '#249EA0' }} value="three" label="Bandingkan" />
          <Tab style={{ color: '#249EA0' }} value="four" label="Peta" />
        </Tabs>
      </Box>
      <ExpandKota />
      {/* <Buttons /> */}
      {/* <CustomizedTabs /> */}
    </>
  );
}
