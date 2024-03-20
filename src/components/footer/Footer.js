import { Box, Grid } from "@mui/material";
import "./footer.css";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingX: "70px",
        paddingY: "30px",
        background: "#574b8a",
        fontFamily: "Roboto,sans-serif",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="start"
        alignItems="center"
        sx={{
          borderBottom: "1px solid rgba(255, 255, 255, .2)",
          paddingBottom: "20px",
        }}
      >
        <Grid item>
          <img
            src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/644722dc78f4425de005628c_logo%20(1).png"
            style={{ height: "32px" }}
          />
        </Grid>
        <Grid item>
          <p className="logo-description">
            Modern Java <br />
            for Your Business
          </p>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          borderBottom: "1px solid rgba(255, 255, 255, .2)",
          paddingBottom: "50px",
          marginBottom: "30px",
        }}
      >
        <Grid item sx={{ marginInlineEnd: "200px" }}>
          <h4 className="title">Navigation</h4>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </Grid>
        <Grid item>
          <h4 className="title">Contact Info</h4>
          <Grid
            container
            direction="row"
            justifyContent="start"
            alignItems="center"
            sx={{ marginBlockEnd: "15px" }}
          >
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a83f7165c8953_mail-white.svg"
              height="16px"
            />
            <span className="simple">contact@katyella.com</span>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="start"
            alignItems="center"
          >
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8377145c89b4_map-white.svg"
              height="16px"
            />
            <span className="simple">
              5290 Shawnee Rd, <br /> Alexandria, VA 22312
            </span>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <img
          src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a83c3895c8965_twitter-white.svg"
          height="16px"
          className="img-last"
        />
        <img
          src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a834f195c8950_linkedin-white.svg"
          height="16px"
        />
      </Grid>
    </Box>
  );
};

export default Footer;
