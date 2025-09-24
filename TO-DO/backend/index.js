import express from 'express'

const app = express();
const port = 8000


app.get('/',(re1 ,res)=>{
    res.send("hello world")
})

app.listen(port , ()=>{
    console.log('listening on port' , port);
})