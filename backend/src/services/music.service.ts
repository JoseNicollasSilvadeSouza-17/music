import MusicRepository from "../repositories/music.repository.js";
import { redis } from "../config/redis.js";
import {
	CreateMusicSchema,
	type CreateMusicDto,
	type ReplaceMusicDto,
	type UpdateMusicDto,
} from "../types/MusicDTO.js";

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

	async deleteMusic(id: string) {
		const music = await musicRepository.deleteMusic(id);

		await redis.del(`music:${id}`);
		await redis.del("songs");

		return music;
	}
}
