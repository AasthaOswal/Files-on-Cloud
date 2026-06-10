const API_BASE =
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "localhost"
    ? `http://localhost:${window.location.port || 10002}`
    : "https://files-on-cloud.onrender.com";

window.APP_CONFIG = {
  API_BASE,
};