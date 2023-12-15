require("dotenv").config();

require('./config/db.conection')

const { PORT } = process.env;

const express = require("express");
const cors = require('cors');
const morgan = require('morgan')

const moviesRouter = require('./routes/movies');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
app.use(morgan('dev'));

app.use('/movies', moviesRouter);

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))