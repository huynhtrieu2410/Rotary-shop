import React from 'react';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

import UnitBrand from './UnitBrand';
import { Container } from '@mui/system';
import { CenterFocusStrong } from '@material-ui/icons';
import { Grid } from '@mui/material';

const useStyles = makeStyles({
    root: {
      backgroundColor: '#F0F0F0',
      paddingBottom: '20px',
    
    }
  });

function Brand() {

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <div style={{padding: '40px 0px 20px'}}>
                <Button variant="contained">NHÃN HIỆU</Button>
            </div>
            <UnitBrand/>
        </div>

    )
}

export default Brand;