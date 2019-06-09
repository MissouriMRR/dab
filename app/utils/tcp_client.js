import net from 'net';

// TODO: Figure out how to send data
const connectNow = () => {
  const client = new net.Socket();

  client.connect(10000, 'localhost', () => {
    console.log('Did connect');
  });

  client.on('data', () => {
    console.log('I received data!');
  });

  client.on('close', () => {
    console.log('CLOSED');
  });
};

export default function establishConnection(msg) {
  connectNow(msg);
}
