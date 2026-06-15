import client from "prom-client";
import type { Request, Response } from "express";

const registry = client.register;

client.collectDefaultMetrics({
	prefix: "music_",
	register: registry,
});

async function prometheusMetrics(req: Request, res: Response) {
	res.setHeader("Content-Type", registry.contentType);

	const metrics = await registry.metrics();

	res.send(metrics);
}

export { prometheusMetrics };
