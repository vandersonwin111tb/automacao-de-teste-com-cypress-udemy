const { defineConfig } = require("cypress")

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://notes-serverless-app.com/', // URL da aplicação do curso
    env: {
      viewportWidthBreakpoint: 768,
    },
    // defaultCommandTimeout: 8000,      // <-- CORRETO: Define o tempo de timeout (ex: 4000ms)
    // setupNodeEvents(on, config) {
    //   // implemente os node event listeners aqui, se necessário
    // },
  },
  projectId: '3zx52z'
})