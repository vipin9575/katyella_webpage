import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

const Cards_2 = ({ image, content1, content2, profile, content3 }) => {
  return (
    <Box>
      <Card
        sx={{
          width: "503px",
          padding: "24px",
          borderRadius: "20px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: "100%", height: "256px" }}
          image={image}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="body2" component="div">
            {content1}
          </Typography>
          <Typography variant="h5">{content2}</Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CardMedia
            component="img"
            sx={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
            image={profile}
            alt="profile"
          />
          <Typography variant="body2" className="kalam">
            {content3}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default Cards_2;
