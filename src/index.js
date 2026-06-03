console.log("Hello world.......");
import express from 'express';
import ejs from 'ejs';
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routers/index.js';

const __dirname=dirname(fileURLToPath(import.meta.url));
console.log(__dirname);


const app=express();
app.set('views', join (__dirname,'views'));
app.set('view engine','ejs');

app.use(express.static(join (__dirname, 'public')));

app.use(indexRouter);



app.listen(process.env.PORT || 3000);
console.log("El servidor esta escuchando en el puerto: ", process.env.PORT || 3000);