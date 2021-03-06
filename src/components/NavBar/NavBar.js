import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const pages = [{title: 'Inicio', linkUrl: "/"} ,
              {title: 'Productos', linkUrl: "/Products"} ,
              {title: 'Preguntas Frecuentes', linkUrl: "/faq"} ,
              {title: 'Contactenos', linkUrl: "/contactUs"}];

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

  return (
    <AppBar position="static" style={{backgroundColor: "#2c387e"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', textDecoration: "none" } }}
          >
              <Link to={"/"} sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none" }} className="logo">
                Elite Hardware
              </Link>
          </Typography>

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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu} color="black" style={{backgroundColor: "#2c387e"}}>
                <Link to={page.linkUrl} sx={{ my: 2, color: 'green', display: 'block', textDecoration: "none" }} className="navItem">
                  <Typography textAlign="center">{page.title}</Typography>
                </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems:"center" }}
            >
            <Link to={"/"} sx={{ my: 2, color: 'white', display: 'block', textDecoration: "none" }} className="logo">
            Elite Hardware
              </Link>
            <Button sx={{ flexGrow: 1 , display: { xs: 'flex', md: 'none' } }} >
              <CartWidget/>
            </Button>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "space-around" }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'green', display: 'flex',textDecoration: "none", justifyContent: "center" }} className="navItem"
              ><Link to={page.linkUrl} sx={{ my: 2, color: 'green', display: 'block', textDecoration: "none" }} className="navItem">
                {page.title}
                </Link>
              </Button>
            ))}
            <Button sx={{ backgroundColor: "#2c387e" }}>
              <CartWidget/>
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;