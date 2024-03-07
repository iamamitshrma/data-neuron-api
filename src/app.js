import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
// set cors policy
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
// set max limit for each request
app.use(express.json({
    limit: "16kb"
}));
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));
app.use(express.static("public"));
app.use(cookieParser());

// routes imports
import dataRouter from "./routes/data.routes.js"

// routes declaration
app.use("/api/v1/data", dataRouter)
export { app };