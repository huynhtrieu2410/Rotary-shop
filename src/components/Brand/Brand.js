import React from 'react';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

import UnitBrand from './UnitBrand';
import { Container } from '@mui/system';
import { CenterFocusStrong } from '@material-ui/icons';
import { Grid } from '@mui/material';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#ffffff',
    //   padding: '10px',
      display: 'flex-direction: row',
    //   justify: space
        // flex-direction: row,
        justifyContent: 'space-between',
   
    }
  });

function Brand() {

    const classes = useStyles();
    
    return(
        <div class="brand">
            <div >
            <Button variant="contained">Contained</Button>
            </div>
            <UnitBrand/>
        </div>

    )
}

export default Brand;