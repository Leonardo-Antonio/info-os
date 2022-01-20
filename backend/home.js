const { ipcMain } = require("electron");
const os = require("os");
ipcMain.on("getDataSys", (e, args) => {
  const sys = {
    cpus: os.cpus().length,
    modelCpu: os.cpus()[0].model,
    arch: os.arch(),
    userName: os.userInfo().username,
    shell: os.userInfo().shell,
    osVersion: os.version(),
    release: os.release(),
    typeOS: os.type(),
    userSession: process.env.USER.toString(),
  };
  e.reply("dataSys", sys);
});
