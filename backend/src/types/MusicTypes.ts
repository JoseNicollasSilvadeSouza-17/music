import type { z } from "../config/swaggerSetup.js";
import type {
	authorSchema,
	emailSchema,
	titleSchema,
} from "./schemas/MusicSchemas.js";

export type Email = z.infer<typeof emailSchema>;

export type Author = z.infer<typeof authorSchema>;

export type Title = z.infer<typeof titleSchema>;
