import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import "./Cards_1.css";

const Cards_1 = ({ imageUrl, name, content, sign }) => {
  return (
    <Card
      className="card_1"
      elevation={0}
      sx={{
        maxWidth: 380,
        backgroundColor: "#ffffff",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <Grid className="flexCenter ">
        <img src={imageUrl} alt="img" className="width100 height100" />
      </Grid>
      <CardContent className="displayRow">
        <Typography gutterBottom className="greyColor font10 fontRoboto start">
          {name}
        </Typography>
        <Typography className="colorBlack fontRoboto font20 lineHeight letterSpacing">
          {content}
        </Typography>
        <Typography className="greyColor fontRoboto font15 start">
          {sign}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards_1;
