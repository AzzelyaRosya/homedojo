import React, { useState } from 'react';
import { Box, Grid, IconButton, InputAdornment, TextField } from '@mui/material';

// import data
import lotsOfData from './Data';

// import lodash for filter
import _ from 'lodash';

// icon
import SearchIcon from '@mui/icons-material/Search';

export default function Search(props) {
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
    </>
  );
}
