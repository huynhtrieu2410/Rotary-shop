import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { makeStyles } from '@material-ui/core';

import Hotwheels_banner from '../../../image/Brands/Hotwheels_banner.png';
import Hotwheels_logo from '../../../image/Brands/Hotwheels_logo.png';
import MiniGT_banner from '../../../image/Brands/MiniGT_banner.png';
import MiniGT_logo from '../../../image/Brands/MiniGT_logo.png';
import Tarmac_banner from '../../../image/Brands/Tarmac_banner.png';
import Tarmac_logo from '../../../image/Brands/Tarmac_logo.png';
import Tomica_banner from '../../../image/Brands/Tomica_banner.png';
import Tomica_logo from '../../../image/Brands/Tomica_logo.png';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    margin: '20px',
    // padding: '10px',
    maxHeight: '540px',
    borderRadius: '20px',
  }
});


const UnitBrand = () => {

  const classes = useStyles();

  return (
    <div>
      <Grid container justifyContent="center" spacing="spacing">
        <div className={classes.root}>
          <Card style={{height: '560px'}}>
            <CardActionArea >
              <img
                // className="d-block w-100"
                src={Hotwheels_banner}
                alt="Hotwheels_banner"
                style={{padding: 15}}
              />
              <CardContent>
                <Typography>
                  <a class="active" href="#hotwheels"><img 
                    src={Hotwheels_logo}
                    alt='Hotwheels_logo'
                /></a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        
        <div className={classes.root}>
          <Card  style={{height: '560px'}}>
            <CardActionArea>
              <img
                // className="d-block w-100"
                src={MiniGT_banner}
                alt="MiniGT_banner"
                style={{padding: 15}}
              />
              <CardContent>
                <Typography>
                  <a class="active" href="#hotwheels"><img 
                    src={MiniGT_logo}
                    alt='MiniGT_logo'
                /></a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className={classes.root}>
          <Card style={{height: '560px'}}>
            <CardActionArea >
              <img
                // className="d-block w-100"
                src={Tarmac_banner}
                alt="Tarmac_banner"
                style={{padding: 15}}
              />
              <CardContent>
                <Typography>
                  <a class="active" href="#hotwheels"><img 
                    src={Tarmac_logo}
                    alt='Tarmac_logo'
                /></a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        
        <div className={classes.root}>
          <Card style={{height: '560px'}}>
            <CardActionArea>
              <img
                // className="d-block w-100"
                src={Tomica_banner}
                alt="Tomica_banner"
                style={{padding: 15}}
              />
              <CardContent>
                <Typography>
                  <a class="active" href="#hotwheels"><img 
                    src={Tomica_logo}
                    alt='Tomica_logo'
                /></a>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

      </Grid>
      
    
    </div>
    
  );
}

export default UnitBrand;