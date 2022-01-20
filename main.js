const { app, BrowserWindow } = require("electron");
require("./backend/home");

const createWin = () => {
  const win = new BrowserWindow({
    width: 320,
    height: 425,
    minHeight: 425,
    minWidth: 320,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
  });

  win.loadFile("ui/home/index.html");
};

app.whenReady().then(() => createWin());
