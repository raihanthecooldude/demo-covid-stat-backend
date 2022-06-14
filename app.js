const express = require("express");
const cors = require("cors");
const Router = require("./routes/index");

const app = express();
app.use(express.json());
app.use(cors());
app.use(Router);

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`server is running on port ${port}`));
