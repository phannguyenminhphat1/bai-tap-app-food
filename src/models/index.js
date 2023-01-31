const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_food", "root", "1234", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Ket noi thanh cong");
} catch (error) {
  console.log("Ket noi that bai");
}

module.exports = sequelize;
