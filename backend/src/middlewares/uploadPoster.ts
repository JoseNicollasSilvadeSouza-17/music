import { multerPosterConfig } from "../config/multer.js";

export const uploadPoster = multerPosterConfig.single("poster");