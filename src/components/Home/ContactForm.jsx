import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import {sendEmail} from "../../services/emailServices";

export default function ContactForm() {
    const [nombre, setNombre] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const result = await sendEmail(nombre, empresa, email, telefono, mensaje);

        if (result === 'success') {
            alert('Email enviado con éxito');
            setNombre('');
            setEmpresa('');
            setEmail('');
            setTelefono('');
            setMensaje('');
        } else {
            alert('Error al enviar el correo electrónico');
        }
    };

    return (
        <>
            <Box id="contacto" bgcolor="primary.dark">
                <Box sx={{display:"flex", justifyContent: "center", flexDirection:"column"}}>
                    <Box sx={{padding:"2rem"}}>
                        <Typography variant="h4" align="center" color="white.main">
                            CONTÁCTANOS
                        </Typography>
                        <Typography variant="h6" align="center" color="white.main">
                            Responderemos sus consultas a la brevedad
                        </Typography>
                    </Box>
                </Box>
                <Box display="grid" justifyContent="center"  >
                    <Grid sx={{maxWidth:"md"}} container spacing={2} >
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                label="Nombre"
                                variant="filled"
                                fullWidth
                                type="text"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                                color="relaxed"
                                sx={{background:"white"}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                label="Empresa"
                                variant="filled"
                                fullWidth
                                type="text"
                                value={empresa}
                                onChange={(e) => setEmpresa(e.target.value)}
                                required
                                color="relaxed"
                                sx={{background:"white"}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                label="Email"
                                variant="filled"
                                fullWidth
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                color="relaxed"
                                sx={{background:"white"}}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField
                                label="Teléfono"
                                variant="filled"
                                fullWidth
                                type="text"
                                value={telefono}
                                onChange={(e) => setTelefono(e.target.value)}
                                sx={{background:"white"}}
                                color="relaxed"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <TextField
                                label="Mensaje"
                                rows={4}
                                fullWidth
                                type="text"
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                multiline
                                required
                                variant="filled"
                                sx={{background:"white"}}
                                color="relaxed"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} display="grid" justifyContent="center">
                            <Button
                                type="submit"
                                label="Enviar"
                                color="relaxed"
                                onClick={handleSubmit}
                                variant="contained"
                                size="large"
                                sx={{marginBottom:4}}
                            >Enviar</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}
