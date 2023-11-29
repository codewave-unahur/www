import React from 'react';

import {Grid, Typography} from '@mui/material';

import {Box} from "@mui/material";
import {Item} from "./Productos";


import depatas from '../../assets/casosExitos/depatas.png'
import juuk from '../../assets/casosExitos/juuk.png'
import nebu from '../../assets/casosExitos/nebu.png'

export const productos = [
    {
        nombre: 'Depatas',
        imagenUrl: depatas,
        webUrl: '',
        descripcion: 'Inmediata y confiable asistencia virtual de vetarinaria. Servicion rapido y eficiente mejorando la salud de nuestras mascotas'
    },
    {
        nombre: 'Juuk',
        imagenUrl:juuk,
        webUrl: '',
        descripcion: 'Juuk es un plataforma que conecta guia turistico de pesca con pescadodores, lo que permite un proceso de reserva profecional eficiente y profecional'
    },
    {
        nombre: 'Nebu',
        imagenUrl:nebu,
        webUrl: '',
        descripcion: 'Una plataforma de contración donde los candidatos aplican a oportunidades laborales de acuerdo a sus habilidades y experiensia. Optimiza el tiempo del proceso para las empresas y los candidatos potenciando el proceso de contratacón.'
    },

];
const CasosDeExito = ({ productos }) => {

    return (
        <Box
            id="casosDeExito"
            bgcolor="primary.main"
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
            }}

        >
            <Box sx={{ padding: "2rem" }}>

                <Typography
                    variant="h4"
                    align="center"
                    style={{color:'#ffffff'}}>
                    CASOS DE ÉXITO
                </Typography>
            </Box>
            <Grid
                container
                spacing={3}
                justifyContent='space-around'
            >
                {productos.map((producto, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Item image={producto.imagenUrl} descripcion={producto.descripcion} nombre={producto.nombre} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CasosDeExito;