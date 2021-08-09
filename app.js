const express= require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));
app.get('/home', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/home.html'))});
app.get('/login', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/login.html'))});
app.get('/registro', function(reque,resp){resp.sendFile(path.join(__dirname, 'views/registro.html'))});
app.listen(port, function() {
    console.log('Servido corriendo en corriendo en el puerto'+ port);
})