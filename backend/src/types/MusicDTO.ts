import type z from "zod";
import { captionSchema, musicSchema,  } from "./IMusic.js";
import type { objectIdSchema } from "./MusicSchemas.js";

const CreateMusicSchema = musicSchema.pick({
	title: true,
	description: true,
	author: true,
	email: true,
	year: true,
});

const ReplaceMusicSchema = CreateMusicSchema;

const UpdateMusicSchema = CreateMusicSchema.partial();

const CreateClipSchema = musicSchema.pick({
	clipUrl: true,
	caption: true,
});

export type CreateMusicDto = z.infer<typeof CreateMusicSchema>;
export type ReplaceMusicDto = z.infer<typeof CreateMusicSchema>;
export type UpdateMusicDto = z.infer<typeof UpdateMusicSchema>;
export type CreateClipDto = z.infer<typeof CreateClipSchema>;
export type ObjectIdType = z.infer<typeof objectIdSchema>;
export type CaptionType = z.infer<typeof captionSchema>;

export {
	CreateMusicSchema,
	ReplaceMusicSchema,
	UpdateMusicSchema,
	CreateClipSchema,
};
