import {Grid, Typography} from "@mui/material";

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
          variant='h5'
          align='center'
          component="div"
          color="white.main"
        >
          Solicitud de turnos
        </Typography>
      </Grid>
      <Grid items xs={12} style={{ textAlign: 'center' }}>
        Formulario
      </Grid>

    </Grid>
  )

}
export default Turnos