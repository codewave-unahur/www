import React from 'react';
import imagen1 from "../../assets/IMG_1.jpg";
import imagen2 from "../../assets/IMG_2.jpg";
import imagen3 from "../../assets/IMG_3.jpg"
import imagen4 from "../../assets/IMG_4.jpg"
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';


const items = [
    {
        img: imagen1,
        alt: "imagen1"
    },
    {
        img: imagen2,
        alt: "imagen2"
    },
    {
        img: imagen3,
        alt: "imagen3"
    },
    {
        img: imagen4,
        alt: "imagen4"
    }
]

function Item(props)
{
    return (
            <Box component="img" src={props.item.img} alt={props.item.alt} sx={{width:"100%", height:{xs:"240px", sm:"600px"}}} />
    )
}


const SliderCarousel = () => {

    return (
        <>
        <Box bgcolor="primary.main" id="carousel">
            <Carousel
            autoPlay={true}
            stopAutoPlayOnHover={true}
            animation="fade"
            navButtonsAlwaysVisible={true}
            indicators={true}
            duration={700}
            sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}
                     
            >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Box>
        </>
    );
}

export default SliderCarousel;

