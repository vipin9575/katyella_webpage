import { Box, Grid, Icon, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./main.css";
import Cards from "../../components/cards/CardsServices";
import { servicesData } from "./Data";

const Main = () => {
  return (
    <>
      <Box className="bglightBlue marginBlock85 displayFlex paddingBlock128">
        <Typography className="whiteText marginBottom20 roboto font44 font700">
          Services
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
            Services
          </Typography>
        </Box>
        <Box className="imgStyle">
          <img
            src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a835c275c888f_decor-v1-haze.svg"
            width="100%"
          />
        </Box>
      </Box>
      <Box className="bglight paddingInline20">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            variant="body2"
            component="p"
            color="grey.500"
            className="marginBottom20 roboto"
          >
            PICK WHAT WORKS FOR YOU
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            textAlign="center"
            className="font700 marginBottom20 blackColor roboto"
          >
            Customized Services Tailored to <br /> Your Business Needs
          </Typography>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ paddingBlock: "100px" }}
        >
          <Grid item md={7} sm={12}>
            {servicesData.map((d, index) => (
              <Cards
                key={index}
                image={d.image}
                title={d.title}
                description={d.description}
              />
            ))}
          </Grid>
          <Grid
            item
            md={4}
            sm={12}
            sx={{ marginLeft: "10px", marginBottom: "100px" }}
          >
            <img
              src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a8300985c89d5_notebook.svg"
              alt="image"
              width="370px"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Main;
