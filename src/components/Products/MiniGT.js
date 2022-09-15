import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { makeStyles, ThemeProvider } from '@material-ui/core';



import Hotw_Mustang from '../../image/Products/Hotw_Mustang.png';

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
                    src={Hotw_Mustang}
                    alt="Hotw_Mustang"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Hot Wheels 2021 RLC ’70 Mustang Boss 302
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">989.000 VNĐ</Button>
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
                    src={Hotw_Mustang}
                    alt="Hotw_Mustang"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Hot Wheels 2021 RLC ’70 Mustang Boss 302
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">989.000 VNĐ</Button>
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
                    src={Hotw_Mustang}
                    alt="Hotw_Mustang"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Hot Wheels 2021 RLC ’70 Mustang Boss 302
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">989.000 VNĐ</Button>
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
                    src={Hotw_Mustang}
                    alt="Hotw_Mustang"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Hot Wheels 2021 RLC ’70 Mustang Boss 302
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">989.000 VNĐ</Button>
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
                    src={Hotw_Mustang}
                    alt="Hotw_Mustang"
                    style={{padding: 15}}
                />
                <CardContent>
                    <Typography
                        style={{width: '310px'}}
                    >
                    Hot Wheels 2021 RLC ’70 Mustang Boss 302
                    </Typography>
                </CardContent>
                <ThemeProvider theme={theme} >
                    <Button color="error" variant="outlined" size="medium">989.000 VNĐ</Button>
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