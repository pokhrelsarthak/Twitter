import { Grid } from "@mui/material";
import React from "react";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";

const HomePage = () => {
  return (
     <Grid container spacing={3} className='px-5 lg:px-36 justify-between'>
        <Grid item xs={12} lg={2.5} className='hidden lg:block w-full relative'>
         <Navigation/>


      </Grid>
      <Grid item xs={12} lg={6} className='hidden lg:block w-full relative'>
        <HomeSection/>
      </Grid>
      <Grid item xs={12} lg={3} className='hidden lg:block w-full relative'>
        <p className="text-center">Right Part</p>
      </Grid>
    </Grid>
  );
};

export default HomePage;
