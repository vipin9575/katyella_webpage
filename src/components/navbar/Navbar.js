import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, position: "fixed", zIndex: "0" }}>
      <AppBar
        elevation={0}
        sx={{ backgroundColor: "white", paddingY: "14px", paddingX: "50px" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/644722cc78f4420bf905622c_logo.png"
              alt="Logo"
              style={{ height: "32px" }}
            />
            <ButtonGroup
              color="inherit"
              sx={{
                marginInlineStart: "40px",
                color: "#151515",
                fontSize: "15px",
              }}
            >
              <Button
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  border: "none",
                  letterSpacing: "0",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                Home
              </Button>
              <Button
                href="#articles"
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  border: "none",
                  letterSpacing: "0",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                Articles
              </Button>
              <Button
                href="#services"
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  border: "none",
                  letterSpacing: "0",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                Services
              </Button>
              <Button
                href="#contact"
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  border: "none",
                  letterSpacing: "0",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                Contact
              </Button>
              <Button
                href="#ebook"
                sx={{
                  fontWeight: "bold",
                  textTransform: "none",
                  border: "none",
                  letterSpacing: "0",
                  fontFamily: "Lato, sans-serif",
                }}
              >
                Ebook
              </Button>
            </ButtonGroup>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="search"
              sx={{
                bgcolor: "#EAEAF1",
                borderRadius: "5px",
                padding: "11px",
                marginInlineEnd: "16px",
                color: "#574B8A",
              }}
            >
              <SearchIcon />
            </IconButton>
            <Button
              color="inherit"
              sx={{
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
              }}
            >
              Schedule a call
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
