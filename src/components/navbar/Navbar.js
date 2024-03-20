import { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  ButtonGroup,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "fixed", zIndex: "999" }}>
      <AppBar
        elevation={0}
        sx={{ backgroundColor: "white", paddingY: "10px", paddingX: "50px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo and navigation links */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/644722cc78f4420bf905622c_logo.png"
              alt="Logo"
              style={{ height: "32px" }}
            />
            {/* Conditionally render navigation links based on screen size */}
            <ButtonGroup color="inherit" sx={{ marginInlineStart: "40px" }}>
              <Hidden mdDown>
                {[
                  { label: "Home", path: "/" },
                  { label: "Articles", path: "/articles" },
                  { label: "Services", path: "/services" },
                  { label: "Contact", path: "/contact" },
                  { label: "Ebook", path: "/ebook" },
                ].map((item, index) => (
                  <Button key={index} sx={linkButtonStyles}>
                    <Link to={item.path} className="colorBlack">
                      {item.label}
                    </Link>
                  </Button>
                ))}
              </Hidden>
            </ButtonGroup>
          </Box>
          {/* Search, hamburger, and call to action button */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton aria-label="search" sx={searchButtonStyles}>
              <SearchIcon />
            </IconButton>
            <Button color="inherit" sx={callButtonStyles}>
              Schedule a call
            </Button>
            <Hidden mdUp>
              <IconButton aria-label="menu" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer for navigation links at medium screen size */}
      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
        >
          <IconButton aria-label="close" onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {[
            { label: "Home", path: "/" },
            { label: "Articles", path: "/articles" },
            { label: "Services", path: "/services" },
            { label: "Contact", path: "/contact" },
            { label: "Ebook", path: "/ebook" },
          ].map((item, index) => (
            <ListItem button key={index} onClick={toggleDrawer}>
              <Link to={item.path} className="colorBlack">
                <ListItemText primary={item.label} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

// Styles
const linkButtonStyles = {
  fontWeight: "bold",
  textTransform: "none",
  border: "none",
  letterSpacing: "0",
  fontFamily: "Lato, sans-serif",
};

const searchButtonStyles = {
  bgcolor: "#EAEAF1",
  borderRadius: "5px",
  padding: "11px",
  marginInlineEnd: "16px",
  color: "#574B8A",
};

const callButtonStyles = {
  textTransform: "none",
  letterSpacing: "0",
  backgroundColor: "#F59933",
  fontSize: "17px",
  fontFamily: "Roboto, sans-serif",
  color: "white",
  padding: "8px 20px",
  "&:hover": {
    backgroundColor: "#D1812B",
  },
};

export default Navbar;
