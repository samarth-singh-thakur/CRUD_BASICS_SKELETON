const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express();


dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080

//log request
app.use(morgan('tiny'));

//parse request to body parser

app.use(bodyparser.urlencoded({ urlencoded: true }));

// set view engine
app.set("view engine", "ejs");

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));

app.get('/', (req, res) => {
    res.send("Crud application");
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});