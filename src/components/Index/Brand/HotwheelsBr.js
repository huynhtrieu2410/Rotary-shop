import React from 'react';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

// import UnitBrand from './UnitBrand';
import { Container } from '@mui/system';
import { CenterFocusStrong } from '@material-ui/icons';
import { Grid } from '@mui/material';


import Hotwheels from '../../Products/Hotwheels';

import BG_Hw from '../../../image/Brands/BG_Hw.png'

import Hotw_Mustang from '../../../image/Products/Hotwheels/Hotw_Mustang.png';
import { render } from '@testing-library/react';

// var makeStyles = {
//     backgroundImage: `url(${ BG_Hw })`
//   };

function HotwheelsBrand() {
    

    // const classes = useStyles();
    
    return(
        <div
            // className={classes.root}
            style={{
                backgroundImage: `url(${BG_Hw})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div style={{padding: '40px 0px 20px'}}>
                <Button variant="contained">HOTWHEELS</Button>
            </div>
            <Hotwheels/>
        </div>

    )
}

export default HotwheelsBrand;