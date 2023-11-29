import React from 'react'
import { Box } from "@mui/material";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ContactForm from "./Home/ContactForm"
import SliderCarousel from "./Home/SliderCarousel";
import Servicios from "./Home/Servicios"
import Productos from "./Home/Productos"
import CasosExitos, {productos} from "./Home/CasosExitos";


export default function Home() {
  return (
    <>
        <Box sx={{ color:"secondary"}}>
        <Header/>
        <SliderCarousel/>
        <Servicios/>
        <Productos/>
        <CasosExitos productos={productos}/>
        <ContactForm/>
        <Footer/> 
      </Box>
    </>
  )
}
