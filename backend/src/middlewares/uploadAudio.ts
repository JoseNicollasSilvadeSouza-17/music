import { multerAudioConfig } from "../config/multer.js";

export const uploadAudio = multerAudioConfig.single("audio");