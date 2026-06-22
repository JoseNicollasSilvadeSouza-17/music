import { multerClipConfig } from "../config/multer.js";

export const uploadClip = multerClipConfig.single("clip");
