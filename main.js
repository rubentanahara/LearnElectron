const {
  app,
  BrowserWindow,
  Menu,
  MenuItem,
  globalShortcut,
} = require('electron');
const { ipcMain } = require('electron/main');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
};
const menu = new Menu();
menu.append(
  new MenuItem({
    label: 'Electron',
    submenu: [
      {
        role: 'help',
        accelerator:
          process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!');
        },
      },
    ],
  }),
);

Menu.setApplicationMenu(menu);

app
  .whenReady()
  .then(() => {
    globalShortcut.register('Alt+CommandOrControl+S', () => {
      console.log('Electron loves global shortcuts!');
    });
  })
  .then(createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
