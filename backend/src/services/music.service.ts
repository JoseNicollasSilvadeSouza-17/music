import MusicRepository from "../repositories/music.repository.js";
import { redis } from "../config/redis.js";
import {
	CreateMusicSchema,
	type CaptionType,
	type CreateMusicDto,
	type ReplaceMusicDto,
	type UpdateMusicDto,
} from "../types/MusicDTO.js";
import { cloudinary } from "../config/cloudinary.js";

const musicRepository = new MusicRepository();

export default class MusicService {
	async getSongs() {
		const key = "songs";

		const cachedSongs = await redis.get(key);

		if (cachedSongs) return cachedSongs;

		const songs = await musicRepository.getSongs();

		if (!songs) return null;

		await redis.set(key, songs, { ex: 300 });

		return songs;
	}

	async getMusic(id: string) {
		const key = `music:${id}`;

		const cachedMusic = await redis.get(key);

		if (cachedMusic) return cachedMusic;

		const music = await musicRepository.getMusic(id);

		if (!music) return null;

		await redis.set(key, music, { ex: 300 });

		return music;
	}

	async addMusic(musicData: CreateMusicDto) {
		const music = await musicRepository.addMusic(musicData);

		await redis.del("songs");

		return music;
	}

	async addMusicUploadPoster(id: string, posterFile: Express.Multer.File) {
		const base64File = posterFile.buffer.toString("base64");
		const fileUri = `data:${posterFile.mimetype};base64,${base64File}`;

		const uplaod = await cloudinary.uploader.upload(fileUri, {
			folder: "poster",
			resource_type: "image",
		});

		const music = await musicRepository.addMusicUploadPoster(
			id,
			uplaod.secure_url,
		);

		await redis.del(`music:${id}`);
		await redis.del(`songs`);

		return music;
	}

	async addMusicUploadAudio(id: string, audioFile: Express.Multer.File) {
		const base64File = audioFile.buffer.toString("base64");
		const fileUri = `data:${audioFile.mimetype};base64,${base64File}`;

		const uplaod = await cloudinary.uploader.upload(fileUri, {
			folder: "audio",
			resource_type: "video",
		});

		const music = await musicRepository.addMusicUploadAudio(
			id,
			uplaod.secure_url,
		);

		await redis.del(`music:${id}`);
		await redis.del(`songs`);

		return music;
	}

	async addMusicUploadClip(
		id: string,
		clipFile: Express.Multer.File,
		caption: CaptionType,
	) {
		const base64File = clipFile.buffer.toString("base64");
		const fileUri = `data:${clipFile.mimetype};base64,${base64File}`;

		const upload = await cloudinary.uploader.upload(fileUri, {
			folder: "video",
			resource_type: "video",
		});

		const music = await musicRepository.addMusicUploadClip(id, {
			clipUrl: upload.secure_url,
			caption,
		});

		await redis.del(`music:${id}`);
		await redis.del(`songs`);

		return music;
	}

	async replaceMusic(id: string, musicData: ReplaceMusicDto) {
		const music = await musicRepository.replaceMusic(id, musicData);

		await redis.del(`music:${id}`);
		await redis.del("songs");

		return music;
	}

	async updateMusic(id: string, musicData: UpdateMusicDto) {
		const music = await musicRepository.updateMusic(id, musicData);

		await redis.del(`music:${id}`);
		await redis.del("songs");

		return music;
	}

	async deleteSongs() {
		const songs = await musicRepository.deleteSongs();

		if (songs && songs.deletedCount > 0) {
			await redis.flushdb();
		}

		return songs;
	}

	async deleteMusic(id: string) {
		const music = await musicRepository.deleteMusic(id);

		await redis.del(`music:${id}`);
		await redis.del("songs");

		return music;
	}
}
