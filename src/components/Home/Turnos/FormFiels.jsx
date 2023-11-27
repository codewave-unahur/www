import {Grid, TextField} from "@mui/material";

const FormField = ({ label, type, name, formValues, setFormValues }) => {
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Grid item xs={12} sm={6} md={6}>
      <TextField
        label={label}
        variant="filled"
        fullWidth
        type={type}
        name={name}
        value={formValues[name]}
        onChange={handleChange}
        required
        color="relaxed"
        sx={{background:"white"}}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </Grid>
  );
};

export default FormField