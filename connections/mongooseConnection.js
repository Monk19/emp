const mongoose = require("mongoose");
main().catch((err) => console.log(err));

async function main() {
  const uri =
    "mongodb+srv://Ravi:newpassword123@cluster0.3khmj.mongodb.net/new?retryWrites=true&w=majority";
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  });

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
module.exports = main;
