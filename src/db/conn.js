const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "127.0.0.1",
  port: "3307",
  user: "root",
  password: "root",
  database: "lista_compras",
  charset: "utf8mb4",
})

conn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("MYSQL Conectado");
});

module.exports = conn;
