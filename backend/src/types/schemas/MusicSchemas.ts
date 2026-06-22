import { z } from "../../config/swaggerSetup.js";
import { OBJECT_ID_MONGODB } from "../../utils/regexp.js";
import { ISO_LANGUAGE_REGEX } from "../../utils/regexp.js";

const objectIdSchema = z
	.string()
	.regex(OBJECT_ID_MONGODB, "Invalid MongoDB ObjectId format");

const captionSchema = z.record(
	z
		.string()
		.regex(
			ISO_LANGUAGE_REGEX,
			"The key must be a valid ISO language code (e.g., en [English], es [Spanish], and pt-BR [Brazilian Portuguese])",
		),
	z.string().min(2, "The caption must be at least 2 characters long"),
);

const emailSchema = z.email({ error: "Provide a valid email address" });

const authorSchema = z.string().min(2, "Author name too short");

const titleSchema = z.string().min(1, "Title is required");

export {
	objectIdSchema,
	captionSchema,
	emailSchema,
	authorSchema,
	titleSchema,
};
