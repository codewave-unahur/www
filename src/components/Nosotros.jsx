import React from "react";
import { Box, Typography } from "@mui/material";


export default function Nosotros() {
  return(
    <>
      <Box id="nosotros"  bgcolor="primary.dark" sx={{display:"flex", justifyContent: "center", flexDirection:"column", padding: "2rem"}}>
        <Box sx={{padding:"2rem"}}>
          <Typography variant="h4" align="center" color="white.main">
            NOSOTROS
          </Typography>
        </Box>
        <Box sx={{padding:"2rem"}} >
          <Typography variant="h6" align="center" color="white.main">
            La Universidad Nacional de Hurlingham tomó la iniciativa de dar vida a Codewave, una Empresa de base tecnológica con un doble propósito: 
            por un lado, explorar, identificar y solucioar los desafíos de las PYMEs, impuslando su transformación digital y elevando su competitividad en la
            economía actual y, por otro, asegurar la continuidad y crecimiento profesional de sus alumnos.
          </Typography>
          <Typography variant="h6" align="center" color="white.main">
            Codewave va mas allá de una simple compañia de desarrollo de software, simboliza nuestr ocompromiso colectivo con el corazon de nuestra economía.
          </Typography>
        </Box>
      </Box>
      </>
  )
}
