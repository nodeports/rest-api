import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/user";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));

app.use("/api/users", userRoutes);

export default app;
