import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import makeStyles from '@material-ui/core'; 

import logo_rotary from '../../../image/header/logo.png';
import cart from '../../../image/header/cart.png';
import account from '../../../image/header/account.png';

import { makeStyles } from '@material-ui/core';
import { padding } from '@mui/system';

const pages = ['Danh mục sản phẩm', 'Giới thiệu', 'Liên hê', 'Ngôn ngữ'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  // borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  border: '1px solid #4F5665',
  borderRadius: '15px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  // backgroundColor: '#4F5665',
  color: '#4F5665',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


const CartIcon = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  margin: '0px 30px',
  // padding: '0px 30px'
}));

const AccountIcon = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
}));


const useStyles = makeStyles({
  root: {
    backgroundColor: '#ffffff',
    padding: '10px',
 
  }
});

const ResponsiveAppBar = () => {

  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <a class="active" href="#home"><img 
                src={logo_rotary}
                alt='logo'
            /></a>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                // color="inherit"
                // color: '#4F5665'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem style={{textTransform: 'none'}} key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                // ml: -20,
                display: { xs: 'flex', md: 'none' },
                // flexGrow: 1,
                // fontFamily: 'monospace',
                // fontWeight: 700,
                // letterSpacing: '.3rem',
                // color: 'inherit',
                // textDecoration: 'none',
              }}
            >
              <a class="active" href="#home"><img 
                  src={logo_rotary}
                  alt='logo'
              /></a>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
              {pages.map((page) => (
                <Button
                  style={{textTransform: 'none'}}
                  key={page}
                  // onClick={handleCloseNavMenu}
                  sx={{ 
                    // my: 2, 
                    color: '#4F5665', 
                    // display: 'block',
                    fontFamily: 'Open Sans',
                    fontWeight: '400',
                    fontSize:'20px',
                    padding: '1.5% 3%'
                  }}
                >
                  {page}
                </Button>
              ))}
              
            </Box>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>


            {/* <IconButton> */}
              <CartIcon>
                  <a class="active" href="#cart"><img 
                    src={cart}
                    alt='cart'
                  /></a>
              </CartIcon>
            {/* </IconButton>               */}
            


            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                  {/* <IconButton> */}
                    <AccountIcon
                    onClick={handleOpenUserMenu} 
                    sx={{ p: 0 }}
                  >
                    <a class="active" href="#account"><img 
                      src={account}
                      alt='acccount'
                    /></a>
                  </AccountIcon>          

                {/* </IconButton> */}
                
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </div>
    </div>
    
  );
};
export default ResponsiveAppBar;
