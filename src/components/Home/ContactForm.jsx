import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import {mostrarAlerta} from "../../utils/alerta";

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const form = document.getElementById('contact-form');


  function enviarFormulario(e) {
    e.preventDefault();
    axios.post("https://api.web3forms.com/submit", {
      apikey: "24295de6-d22f-4215-adc3-0114cc259d0c",
      name: nombre,
      empresa: empresa,
      email: email,
      telefono: telefono,
      mensaje: mensaje,
    })
    .then(async (response) => {
      if (response.status === 200) {
        await Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "Gracias por contactarnos, responderemos a la brevedad",
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un error al enviar el mensaje",
        });
        mostrarAlerta('¡Error!', 'Ocurrió un error al enviar el mensaje', 'error');
      }
    })
    .catch((error) => {
      console.log(error);
    });
   
  }

 

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
      <form id="contact-form">
        <input type="hidden" name="access_key" value="24295de6-d22f-4215-adc3-0114cc259d0c"></input>
        <Grid sx={{maxWidth:"md"}} container spacing={2} >
            <Grid item xs={12} sm={6} md={6}>
              
                <TextField
                 label="Nombre"
                    variant="filled"
                    fullWidth
                    type="text"
                    name="nombre"
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
                    name="empresa"
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
                    name="email"
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
                    name="telefono"
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
                    name="mensaje"
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
                    onClick={enviarFormulario}
                    variant="contained"
                    size="large"
                    sx={{marginBottom:4}}

                >Enviar</Button>
            </Grid>
          </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
}
