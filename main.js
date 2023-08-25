const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

// This method will be called when Electron has finished
app.on("ready", () => {
  createWindow();
  //   app.whenReady().then(createWindow); // This is the same as above
  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  // Quit when all windows are closed.
  if (process.platform !== "darwin") app.quit();
});
