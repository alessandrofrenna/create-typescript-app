module.exports = (name, choices, message, def) => ({
  type: "list",
  message: message,
  choices: choices,
  name: name,
  default: def
});
