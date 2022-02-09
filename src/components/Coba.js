import React from 'react';
// Import Component MUI
import { Button, Box, Container, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
// Import Icon
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';

export default function Coba() {
  return (
    <>
      <Container>
        <Box sx={{ mt: 9 }}>
          <Grid container direction="row">
            {/* Search */}
            <Grid item xs={10.7}>
              <TextField
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIcon sx={{ fontSize: 30, color: '#249EA0' }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                  style: {
                    fontSize: 18,
                    height: 50,
                  },
                }}
                sx={{
                  width: '100%',
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    border: 'solid #249EA0',
                    borderRadius: 7,
                  },
                  '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#249EA0',
                  },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#249EA0',
                  },
                }}
              />
            </Grid>

            {/* Button Setting */}
            <Grid item xs={1.3}>
              <IconButton>
                <TuneIcon sx={{ fontSize: 35, color: '#249EA0' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
