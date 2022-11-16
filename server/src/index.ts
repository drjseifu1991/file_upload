import { Application} from "express";
import express from "express"
import { imagesRouter } from './api/routes/images';
const path = require('path')
const bodyParser = require('body-parser');
const app:Application = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
app.use(cors());


app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}));
app.use(express.urlencoded({extended:false}))
app.use(express.static("./public"))
app.use(bodyParser({limit: '10mb'}));
app.use(bodyParser.json());

app.use('/api', imagesRouter);
app.use('/', express.static(path.join(__dirname, '/')));

app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`)
})
