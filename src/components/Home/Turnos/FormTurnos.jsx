import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";

const FormTurnos = () => {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [fechaTurno, setFechaTurno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos al servidor, incluyendo la fecha y la hora del turno.
    const formData = {
      nombre,
      empresa,
      email,
      telefono,
      mensaje,
      fechaTurno,
    };

    // Lógica para enviar formData al servidor...
  };

  return (
    <>
      <Box id="contacto" bgcolor="primary.dark"></Box>
      <Box display="grid" justifyContent="center">
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="24295de6-d22f-4215-adc3-0114cc259d0c"
          ></input>
          <Grid container spacing={2}>
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
                sx={{ background: "white" }}
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
                sx={{ background: "white" }}
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
                sx={{ background: "white" }}
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
                sx={{ background: "white" }}
                color="relaxed"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                label="Fecha del turno"
                variant="filled"
                fullWidth
                type="datetime-local"
                name="fechaTurno"
                value={fechaTurno}
                onChange={(e) => setFechaTurno(e.target.value)}
                required
                color="relaxed"
                sx={{ background: "white", display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2, marginBottom: 2 }}>
            <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                type="submit"
                label="Enviar"
                color="relaxed"
                variant="contained"
                size="large"
                sx={{ width: '45%' }}
              >
                Enviar
              </Button>
              <Button
                type="submit"
                label="Cancelar"
                color="relaxed"
                variant="contained"
                size="large"
                sx={{ width: '45%', backgroundColor: 'red', color: '#fff'}}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>

        </form>
      </Box>
    </>
  );
};

export default FormTurnos;
