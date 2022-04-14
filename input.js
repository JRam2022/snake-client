
//const { connect } = require('./client.js');

let connection;



const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  //up
  if (key === '\u001b[A') {
    connection.write("Move: up");
  }
  //down
  if (key === '\u001b[B') {
    connection.write("Move: down");
  }
  //right
  if (key === '\u001b[C') {
    connection.write("Move: right");
  }
  //left
  if (key === '\u001b[D') {
    connection.write("Move: left");
  }

  if (key === '\u0041') {
    connection.write("Sup");
  }

};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};




module.exports = { setupInput };