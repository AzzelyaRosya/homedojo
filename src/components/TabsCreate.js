import * as React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

// color
import { createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default function TabsCreate() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Tabs value={value} onChange={handleChange} textColor="primary" indicatorColor="primary" aria-label="primary tabs example" centered>
        <Tab style={{ color: '#249EA0' }} value="one" label="Terdekat" />
        <Tab style={{ color: '#249EA0' }} value="two" label="Terpopuler" />
        <Tab style={{ color: '#249EA0' }} value="three" label="Bandingkan" />
        <Tab style={{ color: '#249EA0' }} value="four" label="Peta" />
      </Tabs>
    </Box>
  );
}
