//Basic setup to launch react webapp as an electron app
const { app, BrowserWindow } = require('electron');
//Allows electron app to load after being packaged
const url = require('url');
const path = require('path');
//Import network library
const net = require('net');

let mainWindow;

createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1300,
    height: 900,
  });

  //Used for exporting the Electron app into a real app
  //Comment out during development, uncomment for distribution
  /*
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: 'file:',
    slashes: true
  }));
  */

  //Uncomment for development only
  mainWindow.loadURL('http://localhost:3000/');

  //Uncomment if you want to inspect element in Electron 
  mainWindow.webContents.openDevTools();
}

startNetwork = () => {
  var client = new net.Socket();
  //TODO: Find the port and server name to connect to
  client.connect(3000, 'localhost');
}

startApp = () => {
  createWindow();
  startNetwork();
}

app.on('ready', startApp); //Starts the electron app