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
import AdbIcon from '@mui/icons-material/Adb';
import { ButtonBase, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { usersContext } from '../context/usersContextProvider';
const pages = ['HOME', 'ABOUT US', 'SHOP','CONTACT US'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);


  const [searchText,setSearchText] = useState('')
  const handelChange=(e)=>{
        setSearchText(e.target.value)
    }

  const handleSearch = () => {
  if (searchText.trim() !== '') {
    navigate(`/search?q=${searchText}`);
  }
  };


  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()
  const{currentUser,isLoggedIn,logout} =useContext(usersContext)
  
  // useEffect(()=>{
  //     const token = localStorage.getItem('token')
  //     if(token){
  //       setIsLoggedIn(true)
  //     }
  // },[])

  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
        logout();
        navigate("/");
    }
  };



  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
// rgb(197, 197, 197);
// rgb(254,186,193)
//#f1f1f1
  return (
    <AppBar position="static" sx={{ backgroundColor: "#f1f1f1", color: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                // for mobile
                <MenuItem key={page}
                component={Link}
                to={page === "HOME" ? "/" : page.toLowerCase().replace(" ", "")}
                onClick={handleCloseNavMenu}>   
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={page === "HOME" ? "/" : page.toLowerCase().replace(" ", "")}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <ButtonBase component={Link} to="/">
              <img src="https://cherryblossom-books.com/wp-content/uploads/2022/10/logo-2.png" alt="Logo"  width={274} height={106} />
            </ButtonBase>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            
            <TextField value={searchText} onChange={handelChange} id="standard-basic" label="Search" variant="standard" />
            <IconButton size="large" aria-label="search" color="inherit" onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
            

            <IconButton size="large" aria-label="Favorite" color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton size="large" aria-label="ShoppingCart" color="inherit">
              <ShoppingCartOutlinedIcon />
            </IconButton>
            
           {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
           
            {isLoggedIn ? (<IconButton size="large"  color="inherit"onClick={handleLogout} >
               <LogoutIcon />
            </IconButton>) : ( <IconButton  size="large" aria-label="Account" color="inherit"onClick={()=>{
              navigate('/login')}} >
            <AccountCircleIcon  />
            </IconButton >)}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
            {/* <Menu
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
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
