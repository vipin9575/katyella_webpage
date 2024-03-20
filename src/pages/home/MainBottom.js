// import { Box, Button, Grid } from "@mui/material";
// import "./mainBottom.css";
// import React from "react";
// import Carosel from "./Carousel";
// import Carousel_1 from "../../components/carousels/Carousel_1";

// const MainBottom = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           marginBlockStart: "100px",
//           backgroundColor: "#574B8A",
//         }}
//       >
//         <Grid container direction="row" justifyContent="center">
//           <Grid item md={6}>
//             <p className="center para1 fontRoboto">TESTIMONIALS</p>
//             <h2 className="center head1 fontRoboto">
//               Stop worrying about your contractors and start collaborating
//             </h2>
//           </Grid>
//         </Grid>
//         {/* Carousel */}
//         <Grid className="flexCenter">
//           <Carosel />
//         </Grid>
//         <img
//           src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a835c275c888f_decor-v1-haze.svg"
//           width="100% "
//           className="marginBottom"
//         />
//       </Box>
//       <Grid
//         container
//         direction="row"
//         justifyContent="space-between"
//         alignItems="center"
//         className="backgroundLightBlue paddingTop30 letterSpacing"
//       >
//         <Grid item md={4} sm={12} className="slideFromLeft">
//           <div className="marginLeftDiv">
//             <p className="font10 fontRoboto font500 greyColor">RECENT POSTS</p>
//             <p className="font36 fontRoboto font700 lineHeight48">
//               Learn From Our <br /> Experts
//             </p>
//             <Button className="backgroundOrange colorWhite paddingBtnViewAllPost ">
//               View All Posts
//             </Button>
//           </div>
//         </Grid>
//         <Grid item md={8} sm={12} className="slideFromRight">
//           <Carousel_1 />
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default MainBottom;

// --------------------------------------
import { Box, Button, Grid } from "@mui/material";
import "./mainBottom.css";
import React from "react";
import Carosel from "./Carousel";
import Carousel_1 from "../../components/carousels/Carousel_1";

const MainBottom = () => {
  return (
    <>
      <Box
        sx={{
          marginBlockStart: "100px",
          backgroundColor: "#574B8A",
        }}
      >
        <Grid container direction="row" justifyContent="center">
          <Grid item md={6}>
            <p className="center para1 fontRoboto">TESTIMONIALS</p>
            <h2 className="center head1 fontRoboto">
              Stop worrying about your contractors and start collaborating
            </h2>
          </Grid>
        </Grid>
        {/* Carousel */}
        <Grid className="flexCenter">
          <Carosel />
        </Grid>
        <img
          src="https://assets-global.website-files.com/6446e55fad4a83409f5c87f6/6446e55fad4a835c275c888f_decor-v1-haze.svg"
          width="100% "
          className="marginBottom"
        />
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-around" // Adjusted to center on all screen sizes
        alignItems="center"
        className="backgroundLightBlue paddingTop30 letterSpacing"
      >
        <Grid item xs={10} sm={8} md={4} lg={3} className="slideFromLeft">
          {/* Adjusted grid size for responsiveness */}
          <div className="marginLeftDiv">
            <p className="font10 fontRoboto font500 greyColor">RECENT POSTS</p>
            <p className="font36 fontRoboto font700 lineHeight48">
              Learn From Our <br /> Experts
            </p>
            <Button className="backgroundOrange colorWhite paddingBtnViewAllPost ">
              View All Posts
            </Button>
          </div>
        </Grid>
        <Grid item xs={10} sm={8} md={8} lg={7} className="slideFromRight">
          {/* Adjusted grid size for responsiveness */}
          <Carousel_1 />
        </Grid>
      </Grid>
    </>
  );
};

export default MainBottom;
