import z from "zod";
import { OBJECT_ID_MONGODB } from "../utils/regexp.js";
import { registry } from "../config/swaggerSetup.js";
import { musicSchema } from "./IMusic.js";
import { CreateMusicSchema } from "./MusicDTO.js";
import { exampleComplete, exampleSimple } from "../utils/examples.js";

const objectIdSchema = z
	.string()
	.regex(OBJECT_ID_MONGODB, "Invalid MongoDB ObjectId format");

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

export {
	objectIdSchema,
	musicSwaggerSchema,
	createMusicSwaggerSchema,
	replaceMusicSwaggerSchema,
	updateMusicSwaggerSchema,
	countSwaggerSchema,
};
