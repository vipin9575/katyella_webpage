import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import "./mainTop.css";
import { useEffect } from "react";
import DataCards from "./Data/DataCards";
import logoImages from "./Data/DataImages";

const MainTop = () => {
  useEffect(() => {
    // Add animation class to the container after component mounts
    const container = document.getElementById("gridContainer");
    const container1 = document.getElementById("gridContainer-1");
    container.classList.add("slideFromRight");
    container1.classList.add("slideFromLeft");
  }, []);

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: "85px",
          backgroundColor: "#574B8A",
          fontFamily: "Roboto, sans-serif",
          color: "#ffffff",
        }}
      >
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid
            item
            md={5}
            sx={{ marginInlineStart: "60px" }}
            id="gridContainer"
          >
            <p className="para1">FULLSTACK JAVA DEVELOPMENT</p>
            <h1 className="heading_h1">
              Get a Fullstack Java developer without the months of recruitment
            </h1>
            <h4 className="heading_h4">
              Want a developer who does frontend, backend and <br />
              infrastructure? Try one of our developers. <br />
              <span style={{ fontWeight: 700 }}>
                One Month Money Back Guarantee!
              </span>
            </h4>
            <Grid container spacing={2} sx={{ zIndex: "0" }}>
              <Grid item>
                <Button className="btn btn1">Schedule an Interview Call</Button>
              </Grid>
              <Grid item>
                <Button className=" btn btn2">Learn More</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a835aa55c8873_pale-done.png"
              width="607px"
              height="503px"
              className="growImageAnimation"
            />
          </Grid>

          <img
            src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a83268e5c888d_decor-v1.svg"
            width="100%"
          />
        </Grid>
      </Box>

      <Box>
        {/*branding logos */}
        {/* <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ marginBlockStart: "40px" }}
        >
          <Grid item>
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/65eeed7031eb4ae0c2cfa419_evestment.png"
              className="logo"
            />
          </Grid>
          <Grid item>
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/65eeed2f6c8d380ba342825e_thrivent.png"
              className="logo"
            />
          </Grid>
          <Grid item>
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/65eeecf525deb81545df9a79_balto.png"
              className="logo"
            />
          </Grid>
          <Grid item>
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/65eeec8a9a973a458f511a29_redhat.png"
              className="logo"
            />
          </Grid>
          <Grid item>
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/65eeecc7ba4d37d05d206e1a_soundex.png"
              className="logo"
            />
          </Grid>
          <Grid item>
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/65eeeabeabcd3b71cdf3cd3d_IM.webp"
              className="logo"
            />
          </Grid>
        </Grid> */}

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ marginBlockStart: "40px" }}
        >
          {logoImages.map((imageUrl, index) => (
            <Grid item key={index}>
              <img src={imageUrl} className="logo" />
            </Grid>
          ))}
        </Grid>

        {/* grid cards */}
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            marginBlockStart: "20px",
            fontFamily: "Roboto, sans-serif",
            paddingInlineEnd: "70px",
          }}
        >
          <Grid
            item
            md={6}
            container
            justifyContent="center"
            direction="row"
            alignItems="center"
          >
            <Grid item id="gridContainer-1">
              <img src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8350445c89d2_cup.svg" />
            </Grid>
          </Grid>
          <Grid item md={6} className="slideFromRight">
            <p className="para2">SIMPLE & POWERFUL</p>
            <h1 className="heading_h2">
              Take the interview process from months to hours.
            </h1>
            <p className="para_line"></p>
            <p className="para3">
              All our developers are based in the United States with years of
              experience in Java development. Get experts into your app
              executing your vision without having to deal with timezones or
              quality issues. If you need senior engineers to add features or
              system architects to redesign a current application to deal with
              new found success, Katyella has what you are looking for.
            </p>
          </Grid>
        </Grid>

        {/* our process button */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ marginY: "100px" }}
        >
          <Grid item className="slideFromTop">
            <Button className="our_process">OUR PROCESS</Button>
          </Grid>
        </Grid>

        {/* grid cards  */}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="start"
          spacing={2}
          sx={{ fontFamily: "Roboto, sans-serif", paddingInline: "60px" }}
        >
          {DataCards.map((step, index) => (
            <Grid item md={2.7} key={index} className="slideFromRight">
              <img src={step.image} />
              <h5 className="heading_h5">{step.title}</h5>
              <p className="para4 fontLato">{step.description}</p>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MainTop;
