import net from 'net';

// TODO: Add ability to parse more complex commands with multiple arguments
const parseCommand = command => {
  return command;
};

// Establishes a connection to the server to send a command and disconnects
const connectNow = command => {
  const client = new net.Socket();

  client.connect(10000, 'localhost', () => {
    console.log('Connected to server');
    client.write('dashboard steve');
  });

  client.on('data', data => {
    console.log(`I received: ${data}`);
    client.write(command);
    client.destroy();
  });

  client.on('close', () => {
    console.log('Client closed');
  });
};

export function sendCommand(msg) {
  connectNow(parseCommand(msg));
}

export function incrementAndDecrement(stepCount, increaseVal) {
  if (increaseVal) {
    return Number(stepCount) - 1;
  }

  return Number(stepCount) + 1;
}
