module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended",
    ],
    rules: {
      // Adicione as seguintes regras:
      "vue/script-setup-uses-vars": "off", // Evita avisos de uso de variáveis no script-setup
      "no-unused-vars": "off", // Ignora variáveis não usadas (geralmente no template)
    },
  };
  