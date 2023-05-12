const express = require("express");
const router = require("./router");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 9000;

app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));
