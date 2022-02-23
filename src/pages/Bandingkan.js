import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, FormControl, IconButton, Grid } from '@mui/material';
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import { styled } from '@mui/system';
import { PopperUnstyled } from '@mui/base';

// icon
import MyLocationIcon from '@mui/icons-material/MyLocation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// atur style expand
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

const StyledButton = styled('button')(
  `
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
  color: #000;

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
  `
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 5px;
  margin: 10px 0;
  min-width: 320px;
  max-height: 400px;
  background: #f5f5f5;
  border: none;
  border-radius: 0.75em;
  color: #000;
  overflow: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
  `
  font-size: 0.875rem;
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: #eeeeee;
    color: #000;
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: #eeeeee;
    color: #000;
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: #eeeeee;
    color: #000;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: #eeeeee;
    color: #000;
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

export default function Bandingkan() {
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
  return (
    <>
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

      {/* Button */}
      {/* <Box fixed sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1, bgcolor: 'warning' }}>
        <Grid container justifyContent="right">
          <Grid item align="right">
            <Button
              variant="contained"
              color="warning"
              sx={{
                mt: 2,
                mr: 2,
                borderRadius: '50%',
              }}
            >
              <IconButton sx={{ color: 'white', height: 60 }}>
                <ArrowForwardIcon />
              </IconButton>
            </Button>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
}
