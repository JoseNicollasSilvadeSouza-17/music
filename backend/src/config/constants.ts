import z from "zod";

const PORT: number = z
	.string()
	.default("3000")
	.transform(Number)
	.parse(process.env.PORT);

const MONGODB_URI: string = z
	.string()
	.min(2, "Invalid MongoDB URI")
	.parse(process.env.DB_URI);

const REDIS_URL: string = z
	.url()
	.min(2, "Invalid Redis URL")
	.parse(process.env.UPSTASH_REDIS_REST_URL);

const REDIS_TOKEN: string = z
	.string()
	.min(2, "Invalid Redis Token")
	.parse(process.env.UPSTASH_REDIS_REST_TOKEN);

const CLOUD_NAME: string = z
	.string()
	.min(2, "Invalid Cloud Name!")
	.parse(process.env.CLOUD_NAME);

const CLOUD_API_KEY: string = z
	.string()
	.min(2, "Invalid API Key!")
	.parse(process.env.API_KEY);

const CLOUD_API_SECRET: string = z
	.string()
	.min(2, "Invalid API Secret!")
	.parse(process.env.API_SECRET);

export {
	PORT,
	MONGODB_URI,
	REDIS_URL,
	REDIS_TOKEN,
	CLOUD_NAME,
	CLOUD_API_KEY,
	CLOUD_API_SECRET,
};
