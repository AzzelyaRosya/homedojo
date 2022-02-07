import * as React from 'react';
import { Button, Grid } from '@mui/material';
// icon
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Buttons() {
  return (
    <>
      <Grid container justifyContent="right">
        <Grid item align="right">
          <Button
            variant="contained"
            color="warning"
            sx={{
              mt: 5,
              mb: 3,
              mr: {
                lg: 10,
              },
              width: '50',
              height: '50',
              borderRadius: '50%',
            }}
          >
            <ArrowForwardIcon />
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
