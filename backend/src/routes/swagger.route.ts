import z from "zod";
import { registry } from "../config/swaggerSetup.js";
import { objectIdSchema } from "../types/schemas/MusicSchemas.js";
import {
	countSwaggerSchema,
	createMusicSwaggerSchema,
	musicSwaggerSchema,
	replaceMusicSwaggerSchema,
	updateMusicSwaggerSchema,
	createPosterBodySchema,
	createAudioBodySchema,
	createClipBodySchema,
} from "../types/schemas/swagger.js";

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
	method: "delete",
	path: "/",
	summary: "Delete all songs",
	description: "This route responsible for deleting all songs.",
	tags: ["Music"],
	responses: {
		204: {
			description: "All songs successfully deleted.",
		},
		404: {
			description: "Music not found.",
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

registry.registerPath({
	method: "post",
	path: "/{id}/upload/poster",
	summary: "Upload poster",
	description: "This route is responsible for uploading the poster.",
	tags: ["Music"],
	request: {
		params: z.object({
			id: objectIdSchema,
		}),
		body: {
			content: {
				"multipart/form-data": {
					schema: createPosterBodySchema,
				},
			},
		},
	},
	responses: {
		201: {
			description: "Poster upload successful.",
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
	method: "post",
	path: "/{id}/upload/audio",
	summary: "Upload audio",
	description: "This route is responsible for uploading the audio.",
	tags: ["Music"],
	request: {
		params: z.object({
			id: objectIdSchema,
		}),
		body: {
			content: {
				"multipart/form-data": {
					schema: createAudioBodySchema,
				},
			},
		},
	},
	responses: {
		201: {
			description: "Audio upload completed successfully.",
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
	method: "post",
	path: "/{id}/upload/clip",
	summary: "Upload the video clip and the caption(s)",
	description:
		"This route is responsible for uploading the clip and the subtitle(s).",
	tags: ["Music"],
	request: {
		params: z.object({
			id: objectIdSchema,
		}),
		body: {
			content: {
				"multipart/form-data": {
					schema: createClipBodySchema,
				},
			},
		},
	},
	responses: {
		201: {
			description:
				"The upload of the clip and subtitle(s) was completed successfully.",
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
