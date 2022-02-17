import * as React from 'react';
import { Box, Grid, Typography, TextField, IconButton, InputAdornment } from '@mui/material';

// icon
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <>
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
