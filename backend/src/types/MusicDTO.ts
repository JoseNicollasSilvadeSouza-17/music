import type z from "zod";
import { musicSchema } from "./IMusic.js";

const CreateMusicSchema = musicSchema.pick({
	title: true,
	description: true,
	author: true,
	email: true,
	year: true,
});

const ReplaceMusicSchema = CreateMusicSchema;

const UpdateMusicSchema = CreateMusicSchema.partial();

export type CreateMusicDto = z.infer<typeof CreateMusicSchema>;
export type ReplaceMusicDto = z.infer<typeof CreateMusicSchema>;
export type UpdateMusicDto = z.infer<typeof UpdateMusicSchema>;

export { CreateMusicSchema, ReplaceMusicSchema, UpdateMusicSchema };
