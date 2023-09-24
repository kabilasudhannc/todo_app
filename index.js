import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// let today_todo = ['finish todo list', 'buy milk', 'finish todo list', 'buy milk', 'finish todo list', 'buy milk'];
let today_todo = [];
let work_todo = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs', {todo: today_todo});
});

app.post('/', (req, res) => {
    today_todo.push(req.body.todo);
    res.render('index.ejs', {todo: today_todo});
});

app.get('/work', (req, res) => {
    res.render('work.ejs', {todo: work_todo});
});

app.post('/work', (req, res) => {
    work_todo.push(req.body.todo);
    res.render('work.ejs', {todo: work_todo});
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});