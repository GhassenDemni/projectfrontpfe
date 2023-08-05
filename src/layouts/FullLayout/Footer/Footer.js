import React from 'react'
import {
    Box,
    Link,
    Typography,
    
  } from '@material-ui/core';
const Footer = () => {
    return (
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography>
          © 2023 Ghassen Demni {" "}
          <Link href="https://www.linkedin.com/in/ghassen-demni-988b36231/">
            
          </Link>{" "}
        </Typography>
      </Box>
    );
}
 
export default Footer;