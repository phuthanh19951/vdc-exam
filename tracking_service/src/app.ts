import express from 'express';
import config from './config/config'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors'

import trackingRoutes from './routes/track';

const app = express();
const port = 9000;

mongoose.set("debug", (collectionName, method, query, doc) => {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
});
mongoose.connect(config.mongo.url, config.mongo.options).then(result => {
    console.log('Connected to database')
}).catch(err => {
    console.error(err.message, err)
})

/** Parse the body of the request */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

/** Routes go here */
app.get('/health', (req, res) => res.json({
    "status": "ok",
    "version": "1.0.1",
}))

app.use('/track', trackingRoutes);

app.listen(port, () => console.log('SERVER', `Server is running ${config.server.hostname}:${config.server.port}`))
process.on('SIGINT', () => {
    mongoose.disconnect()
    process.exit()
});
