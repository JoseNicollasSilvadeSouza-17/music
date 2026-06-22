import multer, { type FileFilterCallback } from "multer";
import {
	audioMime,
	imageAnimationMime,
	imageMime,
	videoMime,
} from "../utils/allowedMimeTypes.js";
import type { Request } from "express";

const storage = multer.memoryStorage();

const posterMime = [...imageMime, ...imageAnimationMime];

const MB = 1024 * 1024;

function fileFilterPoster(
	req: Request,
	file: Express.Multer.File,
	callback: FileFilterCallback,
) {
	const isAllowed = posterMime.includes(file.mimetype);

	if (!isAllowed) return callback(new Error("Invalid image type!"));

	callback(null, true);
}

function fileFilterAudio(
	req: Request,
	file: Express.Multer.File,
	callback: FileFilterCallback,
) {
	const isAllowed = audioMime.includes(file.mimetype);

	if (!isAllowed) return callback(new Error("Invalid audio type!"));

	callback(null, true);
}

function fileFilterClip(
	req: Request,
	file: Express.Multer.File,
	callback: FileFilterCallback,
) {
	const isAllowed = videoMime.includes(file.mimetype);

	if (!isAllowed) return callback(new Error("Invalid video type!"));

	callback(null, true);
}

const multerPosterConfig = multer({
	storage,
	fileFilter: fileFilterPoster,
	limits: {
		fileSize: 5 * MB,
	},
});

const multerAudioConfig = multer({
	storage,
	fileFilter: fileFilterAudio,
	limits: {
		fileSize: 100 * MB,
	},
});

const multerClipConfig = multer({
	storage,
	fileFilter: fileFilterClip,
	limits: {
		fileSize: 150 * MB,
	},
});

export { multerPosterConfig, multerAudioConfig, multerClipConfig };
