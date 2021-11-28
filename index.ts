import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { json } from "body-parser";
import routes from "./routes/articlesRoutes";

/* mongodb+srv://admin:spaceflight@cluster0.7pgxp.mongodb.net/space?retryWrites=true&w=majority */

const app = express();
const PORT = 3001;

mongoose.connect(
  `${process.env.MONGO_URI_PROD}`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connect to database");
  }
);

//app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  return res.send("Back-end Challenge 2021 🏅 - Space Flight News");
});

app.use("/api/articles", routes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
