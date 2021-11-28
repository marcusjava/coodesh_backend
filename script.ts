import axios from "axios";
import Articles from "./models/Articles";
import { ArticleI } from "./models/Articles";
const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://space:flight@cluster0.s6rhu.mongodb.net/spaceDB?retryWrites=true&w=majority";

mongoose.connect(
  `${MONGO_URL}`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connect to database");
  }
);

axios.defaults.baseURL = "https://api.spaceflightnewsapi.net/v3";

(async () => {
  const results = await axios.get("/articles");

  Articles.insertMany(results.data)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => console.log(error.message));
})();
