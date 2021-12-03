const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(__dirname + '/dist/ExamAnwarAngular'));

app.get('/*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/dist/ExamAnwarAngular/index.html'));
})
const port = process.env.PORT;
app.listen(port,'0.0.0.0',()=>{
    console.log('Server running on port : ' +port);
});