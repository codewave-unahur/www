import React, { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import FormField from "./FormFiels";
import {mostrarAlerta} from "../../../utils/alerta";
import {fields} from "./formConfig";

const FormTurnos = () => {

  const formInicial = fields.reduce((valores, campo) => {
    valores[campo.name] = '';
    return valores;
  }, {});

  const [formValues, setFormValues ] = useState(formInicial);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de los datos
    for (let field of fields) {
      if (!field.validation(formValues[field.name])) { // Aquí está la corrección
        mostrarAlerta('¡Ooops!', 'Hago salio mal!!!', 'error');
        return;
      }
    }
    // Retroalimentación al usuario
    mostrarAlerta('¡Buen trabajo!', 'Tus datos han sido enviados correctamente.', 'success');

    // Limpiar el formulario
    setFormValues(formInicial);
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
