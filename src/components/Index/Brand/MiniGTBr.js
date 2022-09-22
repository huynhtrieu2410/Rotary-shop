import React from 'react';

import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

// import UnitBrand from './UnitBrand';
import { Container } from '@mui/system';
import { CenterFocusStrong } from '@material-ui/icons';
import { Grid } from '@mui/material';

import MiniGT from '../../Products/MiniGT';

import BG_MiniGT from "../../../image/Brands/BG_MiniGT.png";

// const useStyles = makeStyles({
//     root: {
//         // marginTop: '20px',
//       backgroundColor: '#FDFCE5',
    
//     }
//   });

function HotwheelsBrand() {

    // const classes = useStyles();
    
    return(
        <div 
            // className={classes.root}
            style={{
                backgroundImage: `url(${BG_MiniGT})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div style={{padding: '40px 0px 20px'}}>
                <Button variant="contained">MiniGT</Button>
            </div>
            <MiniGT/>
        </div>

    )
}

export default HotwheelsBrand;