// "use client";
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import PolicyIcon from '@mui/icons-material/Policy';

// const pages = ['Insurance Products', 'Renew Your Policy', 'Claim', 'Support'];

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="static" >
//       <Container maxWidth="xl" style={{Color:"black"}}>
//         <Toolbar disableGutters>
//           <PolicyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             Policybazar

//           </Typography>

//          {/* Inspect HandleBAr */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu} >
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* Policy logo when shrink */}
//           <PolicyIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             Policybazar
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'flex' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Button style={{color:"white", backgroundColor:"gray"}}>Sign In</Button>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;

"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PolicyIcon from "@mui/icons-material/Policy";
import Link from "next/link";
import ClaimModal from "./../ClaimModal/ClaimModal";

const drawerWidth = 240;
const pages = [""];
const navItems = [
  "Insurance Products",
  "Renew Your Policy",
  "Claim",
  "Support",
];

function Navbar(props) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleCloseModal = () => setModalOpen(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Policy Bazar
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        // component="nav"
        position="relative"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          color: "black",
          pr: 10,
          pl: 10,
        }}
      >
        <Toolbar>
          {/* <PolicyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}

          <img
            src="https://static.pbcdn.in/cdn/images/new-home/logopb.svg?v=5"
            style={{ width: "20%" }}
          ></img>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img className="avatar" src={logo} alt="Buddha Logo" />
          </Box> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "flex" },
              ml: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  color: "black",
                  textTransform: "none",
                  fontSize: "25px",
                }}
              >
                <Box mr={1} ml={0}>
                  <Typography variant="navTabs"> {page}</Typography>
                </Box>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <Button component="label" variant="none">
              <Typography variant="navTabs">Insurance Products</Typography>
            </Button>
            <Button component="label" variant="none">
              <Typography variant="navTabs">
                <Link href="/renewPolicy">Renew Your Policy</Link>
              </Typography>
            </Button>
            <Button
              component="label"
              variant="none"
              onClick={() => setModalOpen(true)}
            >
              <Typography variant="navTabs">
                Claim
                <ClaimModal open={modalOpen} handleClose={handleCloseModal} />
              </Typography>
            </Button>
            <Button component="label" variant="none">
              <Typography variant="navTabs">Support</Typography>
            </Button>
            <Button variant="dark" sx={{ mr: 2, backgroundColor: "gray" }}>
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
