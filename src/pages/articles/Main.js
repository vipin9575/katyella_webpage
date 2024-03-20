import { Box, Card, CardContent, Grid, Icon, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./main.css";
import Cards_2 from "../../components/cards/Cards_2";
import articlesData from "./ArticlesData";

const Main = () => {
  return (
    <>
      <Box className="bglightBlue marginBlock85 displayFlex paddingBlock128">
        <Typography className="whiteText marginBottom20 roboto font44 font700">
          Articles
        </Typography>
        <Typography
          component="div"
          className="divLine marginBottom20"
        ></Typography>
        <Box className="boxDisplayFlex">
          <Typography variant="body2" className="whiteText lato">
            Home
          </Typography>
          <Icon className="lightDarkIcon">
            <KeyboardArrowRightIcon />
          </Icon>
          <Typography variant="body2" className="lightDarkIcon lato">
            Blog
          </Typography>
        </Box>

        <Card>
          <CardContent className="cardDisplayFlex  cardStyle bgWhite boxShadow">
            <Typography
              component="a"
              className="colorPurple paddingInline12 font700 lato"
            >
              All Posts
            </Typography>
            <Typography
              component="a"
              className="colorPurple paddingInline12 font700 lato"
            >
              Java
            </Typography>
            <Typography
              component="a"
              className="colorPurple paddingInline12 font700 lato"
            >
              Spring
            </Typography>
            <Typography
              component="a"
              className="colorPurple paddingInline12 font700 lato"
            >
              Tutorials
            </Typography>
          </CardContent>
        </Card>
        <Box className="imgStyle">
          <img
            src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a835c275c888f_decor-v1-haze.svg"
            width="100%"
          />
        </Box>
      </Box>

      <Box className="bglight paddingBlock128">
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {articlesData.map((item, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <Box display="flex" justifyContent="space-evenly">
                <Cards_2
                  image={item.image}
                  content1={item.content1}
                  content2={item.content2}
                  profile={item.profile}
                  content3={item.content3}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Main;
