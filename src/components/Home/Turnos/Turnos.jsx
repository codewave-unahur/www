import {Grid, Typography} from "@mui/material";
import FormTurnos from "./FormTurnos";

const Turnos = () => {
  return(
    <Grid
      container
      spacing={2} justifyContent="center"
      alignItems="center" style={{ marginTop: 0 }}
      sx={{ bgcolor: 'primary.dark' }}
    >
      <Grid items xs={12}>
        <Typography
          gutterBottom
          variant='h4'
          align='center'
          component="div"
          color="white.main"
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          Solicitud de turnos
        </Typography>
      </Grid>
      <Grid items xs={12} style={{ textAlign: 'center', marginBottom: 2 }}>>
        <FormTurnos/>
      </Grid>

    </Grid>
  )

}
export default Turnos