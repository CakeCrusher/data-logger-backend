require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

import testRoute from "./routes/test";
import transcribe from "./routes/transcribe";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(testRoute);
app.use(transcribe);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
