import Swal from 'sweetalert2';
import theme from "../theme";

export function mostrarAlerta(titulo, texto, tipo) {
  Swal.fire({
    icon: tipo,
    title: titulo,
    text: texto,
    background: theme.palette.primary.contrastText,
    timer: 3000

    // Aquí puedes agregar más opciones de personalización
  });
}