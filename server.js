const express = require('express');
const router = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(router);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`The server is running at port: ${PORT}`);
});