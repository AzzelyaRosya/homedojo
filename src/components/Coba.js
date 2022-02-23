import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Grid, Paper, FormGroup, FormControl } from '@mui/material';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { PopperUnstyled } from '@mui/base';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import lotsOfData from './Data';
import _ from 'lodash';

// icon
import StarIcon from '@mui/icons-material/Star';
import MyLocationIcon from '@mui/icons-material/MyLocation';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

const grey = {
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  background: #f5f5f5;
  border: none;
  border-radius: 0.75em;
  margin: 0.5em;
  padding: 10px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  


  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }

 
  `
);

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  max-height: 400px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: none;
  border-radius: 0.75em;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

 
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

CustomSelect.propTypes = {
  /**
   * The components used for each slot inside the Select.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: PropTypes.shape({
    Listbox: PropTypes.elementType,
    Popper: PropTypes.elementType,
    Root: PropTypes.elementType,
  }),
};

const names = ['Bekasi, Jawa Barat', 'Jakarta, DKI Jakarta', 'Semarang, Jawa Tengah', 'Surabaya, Jawa Timur', 'Yogyakarta, Jawa Tengah', 'Cirebon, Jawa Barat', 'Bandung, Jawa Barat'];

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function Coba(props) {
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
  // Search Filter
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
      {/* Search */}

      <Box
        sx={{ p: 3, mb: 10 }}
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
            <CustomSelect
              sx={{
                borderColor: '#eeeeee',
                borderRadius: 9,
                bgcolor: '#f5f5f5',
              }}
              renderValue={(option) => {
                if (option == null) {
                  return (
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 10, marginBottom: -12 }}>
                      <IconButton>
                        <box-icon type="solid" name="map" color="orange"></box-icon>
                      </IconButton>
                      <em style={{ color: 'grey', fontSize: 16 }}>Temukan Kota</em>
                    </div>
                  );
                }

                return <span>{option.label}</span>;
              }}
              MenuProps={MenuProps}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {names.map((name) => (
                <StyledOption key={name} value={name} MenuProps={MenuProps} inputProps={{ 'aria-label': 'Without label' }}>
                  <IconButton>
                    <box-icon type="solid" name="map" color="orange"></box-icon>
                  </IconButton>
                  {name}
                </StyledOption>
              ))}
            </CustomSelect>
          </FormControl>
          <IconButton>
            <MyLocationIcon sx={{ fontSize: 30, color: '#000', mt: 1 }} />
          </IconButton>
        </div>
      </Box>

      {data.map((x, index) => (
        <Paper key={index} elevation="3" sx={{ p: 1, margin: 'auto', maxWidth: 550, flexGrow: 1, borderRadius: 3, bgcolor: ' #f2f2f2' }} style={{ marginBottom: 10 }}>
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
      {data.length === 0 && <span style={{ align: 'center', color: 'red' }}>No Result Found!</span>}
    </>
  );
}
