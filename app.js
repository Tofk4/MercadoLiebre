const express= require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.get('/', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/home.html'))});
app.get('/login', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/login.html'))});
app.get('/registro', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/registro.html'))});
app.listen(3030, ()=> {
    console.log('Pagina corriendo en http://localhost:3030')
})