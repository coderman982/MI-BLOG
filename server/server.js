import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js';
import blogRouter from './routes/blogRoutes.js';
import adminRouter from './routes/adminRoutes.js';

const app = express();

let isConnected = false;

// Connect to DB lazily on first request (required for Vercel serverless)
app.use(async (req, res, next) => {
    if (!isConnected) {
        await connectDB();
        isConnected = true;
    }
    next();
});

// Middlewares
app.use(cors({ origin: '*' })); // allow all origins
app.use(express.json()); // parse json bodies

// Routes
app.get('/', (req, res) => res.send('Server is working'));
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

// Start locally (Vercel ignores this — it uses the export below)
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;