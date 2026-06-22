import { z } from "../../config/swaggerSetup.js";
import { registry } from "../../config/swaggerSetup.js";
import { musicSchema } from "../IMusic.js";
import { CreateMusicSchema } from "../MusicDTO.js";
import { exampleComplete, exampleSimple } from "../../utils/examples.js";
import { captionSchema } from "./MusicSchemas.js";

const createWithUniqueEmail = CreateMusicSchema.extend({
	email: CreateMusicSchema.shape.email.openapi({
		description:
			"The unique email address for contact. Duplicates are not allowed.",
		"x-unique": true,
	}),
});

const replaceWithUniqueEmail = createWithUniqueEmail;
const updateWithUniqueEmail = createWithUniqueEmail.partial();

const musicSwaggerSchema = registry.register(
	"Music Response",
	musicSchema.openapi({
		description: "Complete structure of a song",
		example: exampleComplete,
	}),
);

const createMusicSwaggerSchema = registry.register(
	"Create Music",
	createWithUniqueEmail.openapi({
		description: "Information needed to register a new music.",
		example: exampleSimple,
	}),
);

const replaceMusicSwaggerSchema = registry.register(
	"Replace Music",
	replaceWithUniqueEmail.openapi({
		description: "Information needed to replace a new music.",
		example: exampleSimple,
	}),
);

const updateMusicSwaggerSchema = registry.register(
	"Update Music",
	updateWithUniqueEmail.openapi({
		description: "Information needed to update a new music.",
		example: exampleSimple,
	}),
);

const countSwaggerSchema = registry.register(
	"Count Songs",
	z.object({
		count: z
			.number()
			.int()
			.min(0, "The total number of songs cannot be less than 0")
			.openapi({
				description: "Show the total number of songs.",
				example: 10,
			}),
	}),
);

const posterSwaggerSchema = registry.register(
	"Poster Schema",
	z.string().openapi({
		type: "string",
		format: "binary",
		description: "Poster image file",
	}),
);

const createPosterBodySchema = z.object({
	poster: posterSwaggerSchema,
});

const audioSwaggerSchema = registry.register(
	"Audio Schema",
	z.string().openapi({
		type: "string",
		format: "binary",
		description: "Audio file",
	}),
);

const createAudioBodySchema = z.object({
	audio: audioSwaggerSchema,
});

const clipSwaggerSchema = registry.register(
	"Clip Schema",
	z.string().openapi({
		type: "string",
		format: "binary",
		description: "Video archive of the music video",
	}),
);

const captionSwaggerSchema = registry.register(
	"Caption Schema",
	captionSchema.openapi({
		type: "object",
		description: "Lyrics for the song",
		example: exampleComplete.caption
	}),
);

const createClipBodySchema = z.object({
	clip: clipSwaggerSchema,
	caption: captionSwaggerSchema,
});

export {
	musicSwaggerSchema,
	createMusicSwaggerSchema,
	replaceMusicSwaggerSchema,
	updateMusicSwaggerSchema,
	countSwaggerSchema,
	createPosterBodySchema,
	createAudioBodySchema,
	createClipBodySchema,
};
