const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

mongoose.set("strictQuery", false);

//mongoose.connect('mongodb://127.0.0.1:27017/myapp');


exports.connect = () => {
 mongoose.connect('mongodb://127.0.0.1:27017/jwt-project', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
//      useCreateIndex: true,
//      useFindAndModify: false,
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};

