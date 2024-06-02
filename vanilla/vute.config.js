// vite.config.js
export default {
  server: {
    port: 5173,
    strictPort: true, // Ensure Vite uses the exact port
    // Do not set https: true unless you have SSL configured properly
    // https: false, // This line is not necessary as the default is HTTP
  },
};
