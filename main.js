const { app, BrowserWindow } = require('electron');
const { ipcMain } = require('electron/main');
const path = require('path');
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // __dirname is the current directory
      // path.join is used to concatenate directories
      // preload is the script that will be loaded before the renderer
      // so that we can have access to the ipcRenderer
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
};

// This method will be called when Electron has finished
app.on('ready', () => {
  ipcMain.handle('ping', () => 'pong'); // This is the function that will be invoked when we call ping from the renderer

  createWindow();
  //   app.whenReady().then(createWindow); // This is the same as above
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  // Quit when all windows are closed.
  if (process.platform !== 'darwin') app.quit();
});
