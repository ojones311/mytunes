const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const app = express();

const PORT = 8000;

const homeRouter = require('./api/home');
const usersRouter = require('./api/users');
const albumsRouter = require('./api/albums');
const genresRouter = require('./api/genres');
const commentsRouter = require('./api/comments');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/albums', albumsRouter);
app.use('/genresRouter', genresRouter);
app.use('/comments', commentsRouter);


app.use((req, res, next) => {
    res.status(404).json({
        payload:"Error. Endpoint is unhandles by the server.",
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
