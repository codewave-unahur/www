import React from 'react'
import { Box } from "@mui/material";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ContactForm from "./Home/ContactForm"
import SliderCarousel from "./Home/SliderCarousel";
import Servicios from "./Home/Servicios"
import Portfolio from "./Home/Portfolio"
import {InstagramEmbed} from "react-social-media-embed";

export default function Home() {
  return (
    <>
        <Box sx={{ color:"secondary"}}>
        <Header/>
        <SliderCarousel/>
        <Servicios/>
        <Portfolio/>
        <ContactForm/>
            <h1>Feed de Instagram</h1>
            <InstagramEmbed
                url='https://www.instagram.com/p/B6tQ0Z4g8fP/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
            />
        <Footer/>
      </Box>
    </>
  )
}
