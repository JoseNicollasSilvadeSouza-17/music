import express, {
	type Application,
	type Request,
	type Response,
	type NextFunction,
} from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import { ZodError } from "zod";
import { prometheusMetrics } from "./config/prometheusMetrics.js";
import router from "./routes/music.route.js";
import * as swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./docs/swagger.js";

const app: Application = express();

app.use(morgan("dev"));

app.use(
	cors({
		origin: ["http://localhost:5173", "http://localhost:5173/"],
	}),
);

app.use(helmet());

app.use(express.json());

app.use("/api/v1/songs", router);

app.get("/", (req: Request, res: Response) => {
	const responseData = {
		message: "Welcome to the Music API!",
		timestamp: new Date().toISOString(),
		docs: "/docs",
		uptime: process.uptime(),
	};

	return res.status(200).json(responseData);
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/health", (req: Request, res: Response) => {
	res.sendStatus(200);
});

app.get("/version", (req: Request, res: Response) => {
	res.status(200).json({ version: "1.0.0" });
});

app.get("/metrics", prometheusMetrics);

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof ZodError) return res.status(400).json(error.issues);

	console.error(error);
	res.sendStatus(500);
});

export default app;
