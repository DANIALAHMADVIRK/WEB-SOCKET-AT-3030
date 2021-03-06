const net = require('net');

// Create a server object
const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data.toString());
  });

  socket.write('SERVER: Hello! This is server speaking.\n');
  socket.end('SERVER: Closing connection now.\n');
}).on('error', (err) => {
  console.error(err);
});

// Open server on port 3030
server.listen(3030, () => {
  console.log('opened server on', server.address().port);
});
