import express from 'express';
import AppRoutes from './routes/index.js';

const app = express()
const PORT = process.env.PORT || 8008;
app.use(express.json())

app.use('/', AppRoutes)
let date = new Date().toLocaleTimeString()

console.log(date)

app.listen(PORT, ()=>console.log(`server lestening at ${PORT}`))