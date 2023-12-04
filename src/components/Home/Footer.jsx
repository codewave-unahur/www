import { Box, Typography, Button } from "@mui/material";
import React from "react";
import {
  Phone,
  Email,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  Place
} from "@mui/icons-material";
import logoBlanco from "../../assets/codewaveBlanco.png";
import logoUnahur from '../../assets/logo_unahur.png';

function getYear() {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
      <>
        <Box bgcolor="grey">
          <Box sx={{
            display: "flex",
            flexDirection: { xs:"column", sm: "row" },
            justifyContent:"space-between", alignItems:"center" }}>

            <Box
                sx={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center'
                }}
            >
              <Box
            component="img"
            sx={{ margin: "1rem", maxWidth:{xs:"70%", sm:"30%"}, height: "auto" }}
            src={logoBlanco}
            alt="logoBlanco"
          />
           <Box
            component="img"
            sx={{ margin: "1rem", maxWidth:{xs:"70%", sm:"30%"}, height: "auto" }}
            src={logoUnahur}
            alt="logoUnahur"
          />


            </Box>
            <iframe title='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.3954165403943!2d-58.637957424984805!3d-34.619446572948675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d01117469b%3A0xdf57a2125cf418d7!2sAusebione%208%2C%20B1688%20Villa%20Tesei%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1698851122717!5m2!1ses!2sar"
                    width="350" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <Box sx={{margin:"2rem", display:"flex", flexDirection:"column"}}>
              <Box sx={{paddingBottom:2, display: "flex", alignItems: "center", flexDirection:{xs:"column", sm:"column", md:"row"} }}>
                <Email sx={{ color: "white.main", fontSize: "3rem" }} />
                <Typography  variant="h6" align="center" color="white.main" sx={{paddingLeft:{sm:"0.5rem"}}}>
                  CODEWAVE@UNAHUR.EDU.AR
                </Typography>
              </Box>
              <Box sx={{paddingBottom:2, display: "flex", alignItems: "center", flexDirection:{xs:"column", sm:"column", md:"row"} }}>
                <Phone sx={{ color: "white.main", fontSize: "3rem" }} />
                <Typography variant="h6" align="center" color="white.main" sx={{paddingLeft:{sm:"0.5rem"}}}>

                  +54 9 11 1234-5678
                </Typography>
              </Box>
              <Box sx={{paddingBottom:2, display: "flex", alignItems: "center", flexDirection:{xs:"column", sm:"column", md:"row"} }}>
                <Place sx={{ color: "white.main", fontSize: "3rem" }} />
                <Typography  variant="h6" align="center" color="white.main" sx={{paddingLeft:{sm:"0.5rem"}}}>

                  AUSEBIONE 8, HURLINGHAM
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
          <Box sx={{ display: "flex", justifyContent: "center", padding:"2" }}>
            <Typography variant="body1" align="center">
              © CODEWAVE {getYear()}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center"}}>
            <Button color="black" variant="text" target="_blank" href="https://www.facebook.com/codewavear">
              <Facebook sx={{fontSize:"3rem"}}/>
            </Button>
            <Button color="black"  variant="text" target="_blank" href="https://www.instagram.com/codewavear/">
              <Instagram sx={{fontSize:"3rem"}}/>
            </Button>
            <Button color="black" variant="text" target="_blank" href="https://twitter.com/codewavear">
              <Twitter sx={{fontSize:"3rem"}}/>
            </Button>
            <Button color="black" variant="text" target="_blank" href="">
              <LinkedIn sx={{fontSize:"3rem"}}/>
            </Button>
          </Box>
        </Box>
      </>
  );
};

export default Footer;
