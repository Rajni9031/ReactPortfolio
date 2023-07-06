import { Typography, Box, Button } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
const Footer = () => {
  return (
    <Box
      sx={{
        background: "hsla(276, 66%, 36%, 0.39)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box sx={{ p: "5% 20%", color: "#edede8" }}>
        <Typography variant="h5">Rajni Singh</Typography>
        <Typography variant="subtitle1">Student at NIT Jamshedpur</Typography>
        <Typography variant="subtitle1">Jamshedpur,Jharkhand</Typography>
        {/* <Typography variant='h3'>J S</Typography> */}
      </Box>
      <Box
        className="footer"
        sx={{
          pt: { xs: "5%", md: "0" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "1rem",
          rowGap: "1rem",
          color: "#edede8",
        }}
      >
        <Button color="inherit" href="https://www.linkedin.com/in/rajni9031/">
          <LinkedInIcon />
        </Button>
        <Button color="inherit" href="mailto:rajnisingh9031@gmail.com">
          <EmailIcon />
        </Button>
        <Button href="https://github.com/Rajni9031" sx={{ color: "inherit" }}>
          <GitHubIcon />
        </Button>
        <Button color="inherit" href="https://www.instagram.com/_rajni_9031">
          <InstagramIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
