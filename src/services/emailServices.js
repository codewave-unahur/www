import axios from 'axios';

export async function sendEmail(nombre, empresa, email, telefono, mensaje) {
    const emailData = {
        from: email,
        to: process.env.REACT_APP_EMAIL_TO,
        subject: `Mensaje de ${nombre}`,
        text: `Nombre: ${nombre}\nEmpresa: ${empresa}\nEmail: ${email}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`
    };

    try {
        const response = await axios.post(process.env.REACT_URL_SERVICE_MAIL, emailData, {
            headers: {
                'api-key': process.env.REACT_APP_ABSTRACT_API_KEY
            }
        });

        if (response.data.status === 'sent') {
            return 'success';
        } else {
            return 'error';
        }
    } catch (error) {
        console.error('Error al enviar el correo electrónico', error);
    }
}
