import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDb from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import path from "path";

const app = express();
const port = process.env.PORT || 4000;
const __dirname = path.resolve();
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

connectDb();

app.use(express.json()); // allows us to parse incoming requests: req.body
app.use(cookieParser()); // allows us to parse incoming cookies
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// API Endpoint
// app.get('/', (req, res) => res.send("API Working Fine"));
app.use('/api/auth', authRouter);

// For building production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'dist')));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
