import net from 'net';

export default function connect_now() {
  var client = new net.Socket();

  client.connect(25565, '120.0.0.1', function() {
    console.log('Connected');
  });

  console.log('If you made it past here, congrats!');
};