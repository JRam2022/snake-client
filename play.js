//const net = require("net");

const { connect } = require('./client.js');

const { setupInput } = require('./input.js')
let connection;
console.log("Connecting ...");
connection = connect();
setupInput(connection);
