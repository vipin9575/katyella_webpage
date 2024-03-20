import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import "../../pages/services/main.css";

const Cards = ({ image, title, description }) => {
  return (
    <Card
      elevation={0}
      className="margin20 padding20 boxDisplayFlex borderRadius16 boxShadowCard orangeBorder"
    >
      <Grid>
        <CardMedia
          component="img"
          image={image}
          sx={{ width: "80px", height: "80px", marginBlockStart: "15px" }}
        />
      </Grid>
      <Grid>
        <CardContent>
          <Typography className="marginBottom20 roboto font21">
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="grey.500"
            className="lato lineHeight24"
          >
            {description}
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default Cards;
