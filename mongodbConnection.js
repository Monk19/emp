const { MongoClient } = require("mongodb");
const uri =
  "mongodb+srv://Ravi:newpassword123@cluster0.3khmj.mongodb.net/new?retryWrites=true&w=majority";
const client = new MongoClient(uri, { dbName: "users" });
const a = 1;
const b = 2;
module.exports = { client, a, b };
exports.place = "axe";
console.log(module.exports);
