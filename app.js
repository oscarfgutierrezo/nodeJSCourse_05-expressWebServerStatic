// Importaciones de terceros
import express from 'express';

// Definir puerto
const PORT = 8080;

// Crear servidor generando una instancia de Express
const app = express();

// Servir contenido estático desde archivo index.html ubicado en la ruta especificada
app.use( express.static('public/') );

// Definir ruta comodín
app.get('*', (req, res) => {
  res.send('404 | Page not found')
})

// Iniciar el servidor generando un listener en el puerto especificado
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});