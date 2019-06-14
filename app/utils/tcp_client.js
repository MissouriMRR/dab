import net from 'net';

// TODO: Figure out how to send a heal command as a tablet
const connectNow = () => {
  const client = new net.Socket();

  client.connect(10000, 'localhost', () => {
    console.log('Did connect');
    client.write('tablet steve');
  });

  client.on('data', data => {
    console.log('I received: ' + data);
    client.write('heal23');
    client.destroy();
  });

  client.on('close', () => {
    console.log('CLOSED');
  });
};

export default function establishConnection(msg) {
  connectNow(msg);
}
