const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());


let BooksRoute = require('./routers/BooksRoute');
app.use(BooksRoute);

let AuthorsRoute = require('./routers/AuthorsRoute');
app.use(AuthorsRoute);


app.use((req, res) => {
    res.send('<h1>Page not found</h1>')
})

app.listen(5000);