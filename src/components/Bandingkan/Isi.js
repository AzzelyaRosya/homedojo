import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import lotsOfData from './Data';

// icon
import StarIcon from '@mui/icons-material/Star';
import { IconButton } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Isi = () => {
  return (
    <>
      {lotsOfData.map((data, index) => (
        <Paper key={index} elevation="3" sx={{ p: 1, margin: 'auto', maxWidth: 550, flexGrow: 1, borderRadius: 3, bgcolor: ' #f2f2f2' }} style={{ marginBottom: 10 }}>
          <FormGroup>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase
                  sx={{ width: 200, height: 200 }}
                  style={{
                    //border radius style
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    overflow: 'hidden',
                  }}
                >
                  <Img src={data.img} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                      {data.nama}
                    </Typography>
                    <Typography sx={{ fontSize: '13px' }} variant="body2" gutterBottom color="text.secondary">
                      {data.desc}
                    </Typography>

                    <Typography sx={{ color: ' #249EA0', fontWeight: 'bold', mt: 2 }} variant="body2">
                      {data.pelatih}
                    </Typography>
                  </Grid>

                  <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ cursor: 'pointer', color: '#F78104', fontSize: '18px', fontWeight: 'bold', mb: 2 }} variant="body2">
                      {data.harga}
                      {/* <FormControlLabel sx={{ ml: 20, mt: -6 }} control={<Checkbox defaultChecked />} label="" /> */}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div" sx={{ fontSize: '15px', fontWeight: 'bold', mr: 2 }}>
                    <IconButton sx={{ fontSize: '8px', color: 'orange' }}>
                      <StarIcon />
                    </IconButton>
                    {data.rating}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </FormGroup>
        </Paper>
      ))}
    </>
  );
};

export default Isi;
