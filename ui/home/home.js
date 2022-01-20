const { ipcRenderer } = require("electron");
const container = document.getElementById("container_data");

const getDataSys = document.getElementById("getDataSys");
getDataSys.addEventListener("click", (e) => {
  ipcRenderer.send("getDataSys");
  ipcRenderer.on("dataSys", (e, args) => {
    container.innerHTML = "";
    container.innerHTML = `
        <ul>
            <li>
                <strong>Model CPU:</strong> ${args.modelCpu}
            </li>
            
            <li>
                <strong>CPUS:</strong> ${args.cpus}
            </li>
            
            <li>
                <strong>Arch:</strong> ${args.arch}
            </li>
            
            <li>
                <strong>OS Version</strong>: ${args.osVersion}
            </li>
            
            <li>
                <strong>OS Release</strong>: ${args.release}
            </li>
            
            <li>
                <strong>OS Type</strong>: ${args.typeOS}
            </li>
            
            <li>
                <strong>User:</strong> ${args.userName}
            </li>
            
            <li>
                <strong>Shell:</strong> ${args.shell}
            </li>
        </ul
        >
    `;
    console.log(args);
  });
});
