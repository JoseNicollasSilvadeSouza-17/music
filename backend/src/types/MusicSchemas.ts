import z from "zod";
import { OBJECT_ID_MONGODB } from "../utils/regexp.js";

const objectIdSchema = z
	.string()
	.regex(OBJECT_ID_MONGODB, "Invalid MongoDB ObjectId format");

export { objectIdSchema };
