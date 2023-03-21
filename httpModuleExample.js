import http from 'http';

const person = {
  name: 'Fernando',
  age: 30,
  country: 'Colombia'
}

const PORT = 8080;

const server = http.createServer( (req, res) => {
  // Configurar header de response
  res.writeHead(202, { 'Content-Type': 'application/json' });
  // Respuesta
  res.write( JSON.stringify(person) );
  // Finalizar el proceso de respuesta
  res.end();
})

// Iniciar el servidor creando un listener en el puesto especificado
server.listen( PORT );

console.log(`Server listening on port ${PORT}`);

