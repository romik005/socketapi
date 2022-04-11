const mongo = require('mongoose')

function databaseconnection(){
    const url = process.env.DBURL;
    mongo.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log('connect');
    })

}
module.exports = databaseconnection