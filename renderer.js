const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const getPing = async () => {
  const response = window.versions.ping();
  console.log(response);
};
