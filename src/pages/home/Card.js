import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActions, Grid, Rating } from "@mui/material";

export function MediaCard1({ imageUrl, name, content }) {
  return (
    <Card
      elevation={0}
      sx={{ maxWidth: 345, backgroundColor: "#574b8a", marginBlockEnd: "50px" }}
    >
      <Grid className="flexCenter">
        <img src={imageUrl} alt="img" className="border50" />
      </Grid>
      <CardContent className="displayRow">
        <Typography
          gutterBottom
          variant="head5"
          className="colorWhite fontKalam font20"
        >
          {name}
        </Typography>
        <Typography
          variant="body3"
          className="colorWhite fontLato textCenter font15 lineHeight letterSpacing"
        >
          {content}
        </Typography>
      </CardContent>
      <CardActions className="flexCenter marginBlock10">
        <Rating
          name="read-only"
          value={5}
          readOnly
          className="borderRadius14px backgroundBorder padding5"
        />
      </CardActions>
    </Card>
  );
}
