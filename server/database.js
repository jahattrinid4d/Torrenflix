const mongoose = require("mongoose");
const { mongodb } = require("./keys");
mongoose
  .connect(mongodb.URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then((data) => console.log("DB CONNECTADA"))
  .catch((err) => console.log(err));
