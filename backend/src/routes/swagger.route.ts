import z from "zod";
import { registry } from "../config/swaggerSetup.js";
import {
	countSwaggerSchema,
	createMusicSwaggerSchema,
	musicSwaggerSchema,
	objectIdSchema,
	replaceMusicSwaggerSchema,
	updateMusicSwaggerSchema,
} from "../types/MusicSchemas.js";

registry.registerPath({
	method: "get",
	path: "/",
	summary: "List all songs",
	description: "This route will be responsible for showing all the songs.",
	tags: ["Music"],
	responses: {
		200: {
			description: "List of songs that have been successfully returned.",
			content: {
				"application/json": {
					schema: z.array(musicSwaggerSchema),
				},
			},
		},
	},
});

registry.registerPath({
	method: "post",
	path: "/",
	summary: "Create a music",
	description: "This route will be responsible for creating a new music.",
	tags: ["Music"],
	request: {
		body: {
			content: {
				"application/json": {
					schema: createMusicSwaggerSchema,
				},
			},
		},
	},
	responses: {
		201: {
			description: "Music created successfully.",
			content: {
				"application/json": {
					schema: musicSwaggerSchema,
				},
			},
		},
		409: {
			description: "Conflict: Email already registered.",
		},
	},
});

registry.registerPath({
	method: "get",
	path: "/count",
	summary: "Count total songs",
	description:
		"This route will be responsible for displaying the total number of songs.",
	tags: ["Music"],
	responses: {
		200: {
			description: "The total count was calculated successfully.",
			content: {
				"application/json": {
					schema: countSwaggerSchema,
				},
			},
		},
	},
});

registry.registerPath({
	method: "get",
	path: "/{id}",
	summary: "Return a music",
	description: "This route will be responsible for revealing a music",
	tags: ["Music"],
	request: {
		params: z.object({
			id: objectIdSchema,
		}),
	},
	responses: {
		200: {
			description: "Music that was successfully returned.",
			content: {
				"application/json": {
					schema: musicSwaggerSchema,
				},
			},
		},
		404: {
			description: "Music not found.",
		},
	},
});

registry.registerPath({
	method: "put",
	path: "/{id}",
	summary: "Replace a music entirely",
	description: "",
	tags: ["Music"],
	request: {
		params: z.object({
			id: objectIdSchema,
		}),
		body: {
			content: {
				"application/json": {
					schema: replaceMusicSwaggerSchema,
				},
			},
		},
	},
	responses: {
		200: {
			description: "Music replaced successfully.",
			content: {
				"application/json": {
					schema: musicSwaggerSchema,
				},
			},
		},
	},
});

registry.registerPath({
	method: "patch",
	path: "/{id}",
	summary: "Update a music partially",
	description: "",
	tags: ["Music"],
	request: {
		params: z.object({
			id: objectIdSchema,
		}),
		body: {
			content: {
				"application/json": {
					schema: updateMusicSwaggerSchema,
				},
			},
		},
	},
	responses: {
		200: {
			description: "Music updated successfully.",
			content: {
				"application/json": {
					schema: musicSwaggerSchema,
				},
			},
		},
	},
});

registry.registerPath({
	method: "delete",
	path: "/{id}",
	summary: "Delete a music",
	description: "This route responsible for deleting a music.",
	tags: ["Music"],
	request: {
		params: z.object({
			id: objectIdSchema,
		}),
	},
	responses: {
		204: {
			description: "Music deleted successfully.",
		},
		404: {
			description: "Music not found.",
		},
	},
});
