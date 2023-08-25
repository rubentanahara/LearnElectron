const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("versions", {
  node: () => process.versions.node,
  //node is the version of node that we are using
  chrome: () => process.versions.chrome,
  // chrome is the version of chrome that we are using
  electron: () => process.versions.electron,
  //electron is the version of electron that we are using
  ping: () => ipcRenderer.invoke("ping"),
  // ping is a function that will invoke the ping function in main.js
  // we can also expose variables, not just functions
});

/*
 *
A preload script contains code that runs before your web page is loaded into the browser window. It has access to both DOM APIs and Node.js environment, and is often used to expose privileged APIs to the renderer via the contextBridge API.

Because the main and renderer processes have very different responsibilities, Electron apps often use the preload script to set up inter-process communication (IPC) interfaces to pass arbitrary messages between the two kinds of processes.

 *
 *
 *
 * */
