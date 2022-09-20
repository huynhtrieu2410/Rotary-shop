import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { makeStyles, ThemeProvider } from '@material-ui/core';



import Tarm_RX7 from '../../image/Products/Tarmac/Tarm_RX7.png';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  status: {
    warning: '#e53e3e',
  },
  palette: {
    red: {
      main: '#F53855',
      
    },
    orange: {
      main: '#FF7700',
      
    },
  },
});

const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    margin: '15px',
    // padding: '10px',
    maxHeight: '540px',
    borderRadius: '20px',
  }
});


const UnitBrand = () => {

  const classes = useStyles();

  return (
    <div >
      <Grid container justifyContent="center" spacing="spacing">
        <div className={classes.root}>
          <Card style={{height: '480px'}}>
            <CardActionArea >
                <img
                    // className="d-block w-100"
                    src={Tarm_RX7}
                    alt="Tarm_RX7"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Tarmac Works 1/64 VERTEX RX-7 FD3S Light Green
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">460.000 VNĐ</Button>
                    <Button 
                        color="warning" 
                        style={{
                            textTransform: 'none',
                            backgroundColor: '#FDFCE5',
                            marginLeft: '20px',
                        }} 
                        variant="outlined" 
                        size="medium"
                        // color='orange'
                    >Thêm vào giỏ hàng
                    </Button>
                </ThemeProvider>
            </CardActionArea>
          </Card>
        </div>
        
        <div className={classes.root}>
          <Card style={{height: '480px'}}>
            <CardActionArea >
                <img
                    // className="d-block w-100"
                    src={Tarm_RX7}
                    alt="Tarm_RX7"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Tarmac Works 1/64 VERTEX RX-7 FD3S Light Green
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">460.000 VNĐ</Button>
                    <Button 
                        color="warning" 
                        style={{
                            textTransform: 'none',
                            backgroundColor: '#FDFCE5',
                            marginLeft: '20px',
                        }} 
                        variant="outlined" 
                        size="medium"
                        // color='orange'
                    >Thêm vào giỏ hàng
                    </Button>
                </ThemeProvider>
            </CardActionArea>
          </Card>
        </div>
        
        <div className={classes.root}>
          <Card style={{height: '480px'}}>
            <CardActionArea >
                <img
                    // className="d-block w-100"
                    src={Tarm_RX7}
                    alt="Tarm_RX7"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Tarmac Works 1/64 VERTEX RX-7 FD3S Light Green
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">460.000 VNĐ</Button>
                    <Button 
                        color="warning" 
                        style={{
                            textTransform: 'none',
                            backgroundColor: '#FDFCE5',
                            marginLeft: '20px',
                        }} 
                        variant="outlined" 
                        size="medium"
                        // color='orange'
                    >Thêm vào giỏ hàng
                    </Button>
                </ThemeProvider>
            </CardActionArea>
          </Card>
        </div>
        
        <div className={classes.root}>
          <Card style={{height: '480px'}}>
            <CardActionArea >
                <img
                    // className="d-block w-100"
                    src={Tarm_RX7}
                    alt="Tarm_RX7"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Tarmac Works 1/64 VERTEX RX-7 FD3S Light Green
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">460.000 VNĐ</Button>
                    <Button 
                        color="warning" 
                        style={{
                            textTransform: 'none',
                            backgroundColor: '#FDFCE5',
                            marginLeft: '20px',
                        }} 
                        variant="outlined" 
                        size="medium"
                        // color='orange'
                    >Thêm vào giỏ hàng
                    </Button>
                </ThemeProvider>
            </CardActionArea>
          </Card>
        </div>
        
        <div className={classes.root}>
          <Card style={{height: '480px'}}>
            <CardActionArea >
                <img
                    // className="d-block w-100"
                    src={Tarm_RX7}
                    alt="Tarm_RX7"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Tarmac Works 1/64 VERTEX RX-7 FD3S Light Green
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">460.000 VNĐ</Button>
                    <Button 
                        color="warning" 
                        style={{
                            textTransform: 'none',
                            backgroundColor: '#FDFCE5',
                            marginLeft: '20px',
                        }} 
                        variant="outlined" 
                        size="medium"
                        // color='orange'
                    >Thêm vào giỏ hàng
                    </Button>
                </ThemeProvider>
            </CardActionArea>
          </Card>
        </div>
        
        
        
      </Grid>
      
    
    </div>
    
  );
}

export default UnitBrand;