import { Box, Button, Icon, TextField, Typography } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./main.css";

const Main = () => {
  return (
    <>
      <Box className="bglightBlue marginBlock85 displayFlex paddingBlock128">
        <Typography className="whiteText marginBottom20 roboto font44 font700">
          Contact
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
            Contact
          </Typography>
        </Box>
        <Box className="imgStyle">
          <img
            src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a835c275c888f_decor-v1-haze.svg"
            width="100%"
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#F3F3F7",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#FFFFFF",
            padding: "40px",
            borderRadius: "36px",
            marginBottom: "150px",
          }}
        >
          <img
            src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a833de55c8887_letter.svg"
            alt=""
          />
          <Typography
            variant="h4"
            sx={{ marginBottom: "20px" }}
            className="font700"
          >
            Drop Us a Line
          </Typography>
          <form style={{ width: "100%" }}>
            {/* Your form fields */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ marginRight: "10px" }}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </Box>
            <TextField
              label="Subject"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            {/* Button container */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Button
                className="bgOrange whiteText"
                sx={{
                  padding: "12px 24px",
                }}
              >
                Send Message
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Main;
