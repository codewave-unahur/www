import React from 'react'
import { Box } from "@mui/material";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ContactForm from "./Home/ContactForm"
import SliderCarousel from "./Home/SliderCarousel";
import Servicios from "./Home/Servicios"
import Portfolio from "./Home/Portfolio"
import CasosExitos, {productos} from "./Home/CasosExitos";


export default function Home() {
  return (
    <>
        <Box sx={{ color:"secondary"}}>
        <Header/>
        <SliderCarousel/>
        <Servicios/>
        <Portfolio/>
        <CasosExitos productos={productos}/>
        <ContactForm/>
        <Footer/> 
      </Box>
    </>
  )
}
