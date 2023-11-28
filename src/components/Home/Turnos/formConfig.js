export const validateNotEmpty = value => value.trim() !== '';
export const validateEmail = value => value.includes('@');
export const validateNumeric = value => !isNaN(value);

export const fields = [
  { label: 'Nombre', type: 'text', name: 'nombre' ,validation: validateNotEmpty},
  { label: 'Empresa', type: 'text', name: 'empresa', validation: validateNotEmpty},
  { label: 'Email', type: 'email', name: 'email',validation: validateEmail },
  { label: 'Teléfono', type: 'text', name: 'telefono',validation: validateNumeric },
  { label: 'Fecha del turno', type: 'date', name: 'fechaTurno',validation: validateNotEmpty },
  { label: 'Hora del turno', type: 'time', name: 'horaTurno',validation: validateNotEmpty },
];