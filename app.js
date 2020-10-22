const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 8000;

const homeRouter = require('./server/routes/home');
const usersRouter = require('./server/routes/users');
const albumsRouter = require('./server/routes/albums');
const genresRouter = require('./server/routes/genres');
const commentsRouter = require('./server/routes/comments');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/albums', albumsRouter);
app.use('/genres', genresRouter);
app.use('/comments', commentsRouter);


app.use(function (req, res, next) {
    res.status(404).json({
      payload: "Error. The endpoint or method is unhandled by the Server",
      err: true
    })
  });

app.use(function (err, req, res, next) {
    console.log(err)
    res.status(err.status || 500);
    res.json({
      payload: {
        err: err,
        errStack: err.stack
      },
      err: true
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`)
  });


module.exports = app;
