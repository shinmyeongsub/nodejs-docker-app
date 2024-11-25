const express = require('express');

const PORT = 9080;

//APP
const app = express();
app.get('/', (req, res) => {
    res.send("Hello Wolrd!!!!!!")
});

app.listen(PORT);
console.log("Server is running")