import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./main.css";

const Main = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="main"
        elevation={0}
      >
        <Grid item md={4} sm={12} sx={{ marginRight: "100px" }}>
          <Typography className="head_line">
            FULLSTACK JAVA DEVELOPMENT
          </Typography>
          <Typography>
            Get a Fullstack Java <br /> developer without the <br /> months of
            recruitment
          </Typography>
          <Typography>
            Want a developer who does frontend, backend and <br />
            infrastructure? Try one of our developers.
          </Typography>
          <Typography>One Month Money Back Guarantee!</Typography>
          <Grid container>
            <Grid item>
              <Button className="grid_button1">Schedule an Intro Call</Button>
            </Grid>
            <Grid item>
              <Button className="grid_button2">Learn More</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} sm={12}>
          <img
            src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a835aa55c8873_pale-done.png"
            className="main_image"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
