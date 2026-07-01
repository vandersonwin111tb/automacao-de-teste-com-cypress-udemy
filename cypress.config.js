// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     baseURL: 'https://notes-serverless-app.com/',
//     defaultCommandTimeout
//     // setupNodeEvents(on, config) {
//     //   // implement node event listeners here
//     // },
//   },
// })

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com/', // URL da aplicação do curso
    // defaultCommandTimeout: 6000,      // <-- CORRETO: Define o tempo de timeout (ex: 4000ms)
    setupNodeEvents(on, config) {
      // implemente os node event listeners aqui, se necessário
    },
  },
});