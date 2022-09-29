import React from 'react';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

// import UnitBrand from './UnitBrand';
import { Container } from '@mui/system';
import { CenterFocusStrong } from '@material-ui/icons';
import { Grid } from '@mui/material';

import Hotwheels from '../../Products/Hotwheels';

const useStyles = makeStyles({
    root: {
        // marginTop: '20px',
      backgroundColor: '#F8F8F8',
    
    }
  });

function TopProducts() {

    const classes = useStyles();
    
    return(
        <div className={classes.root}>
            <div style={{padding: '40px 0px 20px'}}>
                <Button variant="contained">TOP SẢN PHẨM NỔI BẬT</Button>
            </div>
            <Hotwheels/>
        </div>

    )
}

export default TopProducts;