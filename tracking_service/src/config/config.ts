import dotenv from 'dotenv'
dotenv.config();

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    retryWrites: true
};

const MONGO = {
    options: MONGO_OPTIONS,
    url: process.env.DATABASE_URL 
};

const SERVER_HOSTNAME = 'locahost'
const SERVER_PORT = 3000

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
}


export default {
    mongo: MONGO,
    server: SERVER,
    xendit_key: process.env.XENDIT_API_KEY,
}
