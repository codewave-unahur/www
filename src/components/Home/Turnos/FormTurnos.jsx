import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import FormField from "./FormFiels";
import {mostrarAlerta} from "../../../utils/alerta";
const FormTurnos = () => {

  const [formValues, setFormValues ] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    fechaTurno: "",
    horaTurno: ""
    })

  const validateNotEmpty = value => value.trim() !== '';
  const validateEmail = value => value.includes('@');
  const validateNumeric = value => !isNaN(value);

  const fields = [
    { label: 'Nombre', type: 'text', name: 'nombre' ,validation: validateNotEmpty},
    { label: 'Empresa', type: 'text', name: 'empresa', validation: validateNotEmpty},
    { label: 'Email', type: 'email', name: 'email',validation: validateEmail },
    { label: 'Teléfono', type: 'text', name: 'telefono',validation: validateNumeric },
    { label: 'Fecha del turno', type: 'date', name: 'fechaTurno',validation: validateNumeric },
    { label: 'Hora del turno', type: 'time', name: 'horaTurno',validation: validateNotEmpty },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de los datos
    for (let field of fields) {
      if (!field.validation(formValues[field.name])) {
        mostrarAlerta('¡Ooops!', 'Hago salio mal!!!', 'error');
        return;
      }
    }
    // Retroalimentación al usuario
    mostrarAlerta('¡Buen trabajo!', 'Tus datos han sido enviados correctamente.', 'success');
  }

  return (
    <>
      <Box id="formTurno" bgcolor="primary.dark" sx={{ width: '100%'}}></Box>
      <Box display="grid" justifyContent="center">
        <form id="turno-form" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value="24295de6-d22f-4215-adc3-0114cc259d0c"
          ></input>

          <Grid sx={{maxWidth:'md'}} container spacing={2}>
            {fields.map((field, index) => (
              <FormField key={index} {...field} formValues={formValues} setFormValues={setFormValues} />
            ))}
          </Grid>

          <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2, marginBottom: 2 }}>
            <Grid item xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
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
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default FormTurnos;
