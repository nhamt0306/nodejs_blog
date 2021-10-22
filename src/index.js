const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

//Để sử dụng được đường dẫn tĩnh
app.use(express.static(path.join(__dirname,'public'))); //Lúc này để truy cập chỉ cần /f8_icon.png

//Sử dụng cho method post dữ liệu lên server
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//Template engine - handlebars
app.engine('hbs', handlebars({
  extname : ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'))

//HTTP logger - Morgan
app.use(morgan('combined'));


app.get('/', (req, res) => { 
  res.render('home');
});

app.get('/news', (req, res) => { 
  res.render('news');
});

app.get('/search', (req, res) => { 
  res.render('search');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})