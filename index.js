const express = require("express");
const { client, a, b } = require("./mongodbConnection");
const  place  = require("./mongodbConnection");
const mongoose = require("./connections/mongooseConnection");
const User = require("./DB/Modles/UsersSchema");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8090;
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
console.log(place);
mongoose();
async function sad() {
  const user = await new User({ name: "Ravi", password: 123 }).save();
  // User.deleteMany({ name: { $in: ["Mahesh"] } });
  const users = await User.findOne();
  // console.log(users);
}
// sad();
async function connection() {
  try {
    // await client.connect()
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    const mve = await movies.findOne({ title: "Back to the Future" });
    // const mve = await client.db("sample_mflix").collection("movies").findOne({ title: "Back to the Future" });
    // console.log(mve);
    console.log("Sucessfully connected to the Atlas Database");
    //   await movies
    //     .insertOne({ Name: "MeghaShayam", ReleaseDate: "12/09/2023" })
    //     .then((res) => console.log(res));
    // } catch (err) {
    //   console.log(err);
    // }
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}
connection();
app.post("/post", (req, res) => {
  console.log("Request received");
});
app.post("/register", async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (user) {
      console.log(`User alreday exisit under the name ${req.body.name}`);
    } else {
      new User({
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone,
        place: req.body.place,
      }).save();
    }
    console.log("user created sucessfully");
  } catch (err) {
    console.log(err);
  }
  // if (err) {
  //   console.log("Table data already Exisit");
  //   new User({
  //     name: req.body.name,
  //     password: req.body.password,
  //     phone: req.body.phone,
  //     place: req.body.place,
  //   }).save();
  // } else {
  //   console.log("user Already exisit");
  // }
  // console.log("request received");
});
// console.log(req.body);

app.listen(PORT, () => {
  console.log(`we are up at http://localhost:${PORT}`);
});
