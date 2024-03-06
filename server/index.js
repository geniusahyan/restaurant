import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import bodyParser from 'body-parser';
import dbconnect from './DB/connect.js';

const app = express();
const port = process.env.port;

app.use(cors())
app.use(bodyParser.json({exented:true}));
app.use(bodyParser.urlencoded({extended:true}));

// app.use('/', )
dbconnect();
app.get('/', (req,res)=>{
    res.send("<h2>this is something</h2>");
    const id =  req.params.id;
    console.log(id);
})
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})