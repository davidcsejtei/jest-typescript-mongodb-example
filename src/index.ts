import dotenv from 'dotenv';
import { connectDb } from './services/mongo';

const configuration = dotenv.config();

(async () => {
    await connectDb(configuration?.parsed?.MONGO_URL as string);
    console.log('Database connected');
})();