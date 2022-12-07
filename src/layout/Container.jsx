import { useTheme } from "@emotion/react";
import { Typography, Box, Grid, useMediaQuery } from "@mui/material";
import React from "react";

const Container = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Grid container>
      <Grid
        data-cy="header-background"
        sx={{
          padding: matches ? "0 220px" : "0 30px",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "#16ABF8",
          height: "105px",
          zIndex: 10,
        }}
        item
        container
        alignItems="center"
      >
        <Grid item>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "36px",
              fontFamily: "'Poppins', sans-serif",
            }}
            data-cy="header-title"
          >
            TO DO LIST APP
          </Typography>
        </Grid>
      </Grid>
      <Grid
        sx={{
          padding: `145px ${matches ? "220px" : "30px"} 30px ${matches ? "220px" : "30px"}`,
          minHeight: "100vh",
          backgroundColor: "#F4F4F4",
        }}
        xs={12}
        item
      >
        {children}
      </Grid>
    </Grid>
  );
};
export default Container;
