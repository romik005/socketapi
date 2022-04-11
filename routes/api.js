var app = require('express');
var routes = app.Router();

function api(app){

    app.get('/api/test',(req, res)=>{
        res.send('ok');
    })

}

module.exports = api;