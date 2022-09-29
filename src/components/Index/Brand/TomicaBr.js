import React from 'react';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

// import UnitBrand from './UnitBrand';
import { Container } from '@mui/system';
import { CenterFocusStrong } from '@material-ui/icons';
import { Grid } from '@mui/material';

import Tomica from '../../Products/Tomica';

const useStyles = makeStyles({
    root: {
        // marginTop: '20px',
      backgroundColor: '#F0F0F0',
    
    }
  });

function HotwheelsBrand() {

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <div style={{padding: '40px 0px 20px'}}>
                <Button variant="contained">TOMICA</Button>
            </div>
            <Tomica/>
        </div>

    )
}

export default HotwheelsBrand;