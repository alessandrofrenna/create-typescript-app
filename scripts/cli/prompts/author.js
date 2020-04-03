module.exports = {
  type: "input",
  message: `Author name:`,
  name: "Jon Doe",
  validate: answ =>
    answ.length >= 1 ? true : "Please enter your preferred name"
};
