const mongoose = require("mongoose");

const db = require("./keys/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to database"))
  .catch(err => console.log(err));
