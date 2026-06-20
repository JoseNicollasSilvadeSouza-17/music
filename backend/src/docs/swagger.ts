import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { registry } from "../config/swaggerSetup.js";

import "../routes/swagger.route.js";

const generator = new OpenApiGeneratorV3(registry.definitions);

export const swaggerDocs = generator.generateDocument({
	openapi: "3.0.0",
	info: {
		title: "Music API",
		contact: {
			name: "José Nícollas Silva de Souza",
			email: "josenicollassilvadesouza@gmail.com",
		},
		version: "1.0.0",
		license: {
			name: "MIT",
			url: "https://opensource.org/license/mit",
		},
	},
	servers: [
		{
			url: "http://localhost:3000/api/v1/songs",
		},
	],
});
