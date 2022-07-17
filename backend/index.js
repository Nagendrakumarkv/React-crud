import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import userRoutes from "./routes/user.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.use("/", userRoutes);

app.all("*", (req, res) => {
  res.send("Invalid url or this route url is not available");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
