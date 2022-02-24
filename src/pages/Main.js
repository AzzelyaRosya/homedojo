import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Typography, Paper, FormGroup, Grid, ButtonBase, TextField, InputAdornment } from '@mui/material';

import lotsOfData from '../components/Data';

// import
import Expand from '../components/Expand';
import Coba from '../components/Coba';

// import lodash for filter
import _ from 'lodash';

// icon
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

// atur tabs style
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

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
  };

  // isi
  const [background, setBackground] = useState('#f2f2f2');
  const [selectedData, setSelectedData] = useState([]);

  const setStyle = (e) => {
    console.log(e);
    // setBackground(background);
    let fselected = [...selectedData];
    let selectedtrue = selectedData.includes(e);
    console.log(fselected);

    if (selectedtrue) {
      let withoutdouble = fselected.filter((x) => x !== e);
      setSelectedData(withoutdouble);
    } else {
      fselected.push(e);
      setSelectedData(fselected);
    }
  };

  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(lotsOfData);

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    var searchQuery = value.toString().toLowerCase();

    let listdata = ['img', 'nama', 'desc', 'pelatih', 'harga', 'rating'].map((x, i) => {
      return lotsOfData.filter((el) => {
        if (el[x]) {
          return el[x].toString().toLowerCase().indexOf(searchQuery) !== -1;
        }
      });
    });

    var dataset = _.maxBy(listdata, function (o) {
      return o.length;
    });
    setData(dataset);
  };

  return (
    <>
      {/* search */}
      <Box
        sx={{ p: 3 }}
        style={{
          backgroundColor: '#249EA0',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <TextField
              value={searchText}
              onChange={(e) => handleChange(e.target.value)}
              align="center"
              style={{ backgroundColor: '#fff', width: '100%', outline: 'none' }}
              placeholder="Search"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton>
                      <SearchIcon sx={{ fontSize: 30 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                borderRadius: 5,
                '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#249EA0',
                  borderRadius: 5,
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#249EA0',
                  borderRadius: 5,
                },
                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                  borderRadius: 2,
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* tabs */}

      <Box sx={{ mt: 3, fontWeight: 'bold' }}>
        <StyledTabs value={value} onChange={handleChangeTabs} variant="fullWidth" aria-label="full width tabs example" centered>
          <StyledTab label="Terdekat" {...a11yProps(0)} />
          <StyledTab label="Terpopuler" {...a11yProps(1)} />
          <StyledTab label="Bandingkan" {...a11yProps(2)} />
          <StyledTab label="Peta" {...a11yProps(3)} />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>

      {/* terdekat */}
      <TabPanel value={value} index={0}>
        <Expand />
        {data.map((x, index) => (
          <Paper onClick={() => setStyle(index)} elevation="3" sx={{ p: 1, margin: 'auto', maxWidth: 550, flexGrow: 1, borderRadius: 3, bgcolor: `${selectedData.includes(index)} ? #000 : #f2f2f2` }} style={{ marginBottom: 10 }}>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase
                    sx={{ width: 200, height: 200 }}
                    style={{
                      //border radius img
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      overflow: 'hidden',
                    }}
                  >
                    <Img src={x.img} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs container direction="row">
                      {/* Judul */}
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'bold', fontSize: '19px' }}>
                          {x.nama}
                        </Typography>
                      </Grid>

                      {/* Harga */}
                      <Grid item>
                        <Typography variant="subtitle1" component="div" sx={{ fontSize: '15px', fontWeight: 'bold' }}>
                          <IconButton sx={{ fontSize: '8px', color: 'orange' }}>
                            <StarIcon />
                          </IconButton>
                          {x.rating}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: '14px', mt: -3 }} variant="body2" gutterBottom color="text.secondary">
                        {x.desc}
                      </Typography>
                      <Typography sx={{ color: ' #249EA0', fontWeight: 'bold', mt: 3, fontSize: '16px' }} variant="body2">
                        {x.pelatih}
                      </Typography>
                      <Typography flexDirection={'row'} sx={{ cursor: 'pointer', color: '#F78104', fontSize: '21px', fontWeight: 'bold', mt: 2 }} variant="body2">
                        {x.harga}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>
          </Paper>
        ))}
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Expand />
        {data.map((x, index) => (
          <Paper onClick={() => setStyle(index)} elevation="3" sx={{ p: 1, margin: 'auto', maxWidth: 550, flexGrow: 1, borderRadius: 3, bgcolor: `${selectedData.includes(index)} ? #000 : #f2f2f2` }} style={{ marginBottom: 10 }}>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase
                    sx={{ width: 200, height: 200 }}
                    style={{
                      //border radius img
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      overflow: 'hidden',
                    }}
                  >
                    <Img src={x.img} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs container direction="row">
                      {/* Judul */}
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'bold', fontSize: '19px' }}>
                          {x.nama}
                        </Typography>
                      </Grid>

                      {/* Harga */}
                      <Grid item>
                        <Typography variant="subtitle1" component="div" sx={{ fontSize: '15px', fontWeight: 'bold' }}>
                          <IconButton sx={{ fontSize: '8px', color: 'orange' }}>
                            <StarIcon />
                          </IconButton>
                          {x.rating}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: '14px', mt: -3 }} variant="body2" gutterBottom color="text.secondary">
                        {x.desc}
                      </Typography>
                      <Typography sx={{ color: ' #249EA0', fontWeight: 'bold', mt: 3, fontSize: '16px' }} variant="body2">
                        {x.pelatih}
                      </Typography>
                      <Typography flexDirection={'row'} sx={{ cursor: 'pointer', color: '#F78104', fontSize: '21px', fontWeight: 'bold', mt: 2 }} variant="body2">
                        {x.harga}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>
          </Paper>
        ))}
      </TabPanel>

      {/* bandingkan */}
      <TabPanel value={value} index={2}>
        <Expand />
        {data.map((x, index) => (
          <Paper onClick={() => setStyle(index)} elevation="3" sx={{ p: 1, margin: 'auto', maxWidth: 550, flexGrow: 1, borderRadius: 3, bgcolor: `${selectedData.includes(index)} ? #000 : #f2f2f2` }} style={{ marginBottom: 10 }}>
            <FormGroup>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase
                    sx={{ width: 200, height: 200 }}
                    style={{
                      //border radius img
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopRightRadius: 10,
                      borderTopLeftRadius: 10,
                      overflow: 'hidden',
                    }}
                  >
                    <Img src={x.img} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs container direction="row">
                      {/* Judul */}
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'bold', fontSize: '19px' }}>
                          {x.nama}
                        </Typography>
                      </Grid>

                      {/* Harga */}
                      <Grid item>
                        <Typography variant="subtitle1" component="div" sx={{ fontSize: '15px', fontWeight: 'bold' }}>
                          <IconButton sx={{ fontSize: '8px', color: 'orange' }}>
                            <StarIcon />
                          </IconButton>
                          {x.rating}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontSize: '14px', mt: -3 }} variant="body2" gutterBottom color="text.secondary">
                        {x.desc}
                      </Typography>
                      <Typography sx={{ color: ' #249EA0', fontWeight: 'bold', mt: 3, fontSize: '16px' }} variant="body2">
                        {x.pelatih}
                      </Typography>
                      <Typography flexDirection={'row'} sx={{ cursor: 'pointer', color: '#F78104', fontSize: '21px', fontWeight: 'bold', mt: 2 }} variant="body2">
                        {x.harga}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </FormGroup>
          </Paper>
        ))}
      </TabPanel>

      <TabPanel value={value} index={3}>
        <Expand />
        {/* <Coba /> */}
      </TabPanel>
    </>
  );
}
