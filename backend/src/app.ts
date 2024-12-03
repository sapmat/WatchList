import * as dotenv from "dotenv";
import * as express from "express";
import mongoose from "mongoose";
import * as path from "path";
import { errorHandler } from "./Middleware/Errors/error";
import loggerMiddleware from "./Middleware/Logs/logger";
import { filmRouter } from "./Routes/film.router";
import { userRouter } from "./Routes/user.router";
import { groupRouter } from "./Routes/group.router";

const cors = require("cors");

dotenv.config({ path: path.join(__dirname, "..", "src/.env") });

mongoose.connect(`mongodb://${process.env.MONGO_IP}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/films", filmRouter);
app.use("/users", userRouter);
app.use("/groups", groupRouter);

app.use(loggerMiddleware);
app.use(errorHandler);

app.listen(process.env.SERVER_PORT, () => console.log(`Server is listening on port ${process.env.SERVER_PORT}`));
