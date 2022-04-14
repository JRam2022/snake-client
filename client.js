const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function (data) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write('Name:JJR');
    console.log(data);
    

    //setInterval(() => {
    //  conn.write('Move: up');
    //}, 50);
  });

  return conn;
};

module.exports = { connect };