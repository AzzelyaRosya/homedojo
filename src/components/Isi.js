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

export default function isi() {
  const [background, setBackground] = useState('#f2f2f2');
  const [selectedData, setSelectedData] = useState([]);

  const setStyle = (e) => {
    console.log(selectedData);
    // setSelectedData(e);
    // setBackground(background);
    let fselected = [...selectedData];
    let selectedtrue = selectedData.filter((x) => x.id === e.id);
    console.log(fselected);

    if (selectedtrue.length > 0) {
      let withoutdouble = fselected.filter((x) => x.id !== e.id);
      setSelectedData(withoutdouble);
    } else {
      fselected.push(e);
      setSelectedData(fselected);
    }
  };
  return (
    <>
      {data.map((x, index) => (
        <Paper
          onClick={() => setStyle(x)}
          elevation="3"
          sx={{ p: 1, margin: 'auto', maxWidth: 550, flexGrow: 1, borderRadius: 3, bgcolor: `${selectedData.filter((item) => item.id === x.id).length > 0 ? '#e6ffff' : '#fff'}` }}
          style={{ marginBottom: 10 }}
        >
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
    </>
  );
}
