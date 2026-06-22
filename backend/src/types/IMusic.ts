import z from "zod";
import { currentYear } from "../utils/date.js";
import {
	captionSchema,
	emailSchema,
	authorSchema,
	titleSchema,
} from "./schemas/MusicSchemas.js";

const musicSchema = z.object({
	title: titleSchema,
	description: z.string().min(2, "Description too short"),
	author: authorSchema,
	email: emailSchema,
	year: z
		.number()
		.int()
		.min(1900, "Very old date")
		.max(currentYear, "Date does not exist yet"),
	posterUrl: z.url({ error: "Invalid poster URL" }).optional(),
	audioUrl: z.url({ error: "Invalid audio URL" }).optional(),
	clipUrl: z.url({ error: "Invalid clip URL" }).optional(),
	caption: captionSchema.optional(),
	isoZipUrl: z.url({ error: "Invalid ISO Zip file URL" }).optional(),
});

export type IMusic = z.infer<typeof musicSchema>;

export { musicSchema };
