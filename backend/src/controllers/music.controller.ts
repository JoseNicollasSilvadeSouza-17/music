import type { Request, Response } from "express";
import MusicRepository from "../repositories/music.repository.js";
import { objectIdSchema } from "../types/MusicSchemas.js";
import {
	CreateMusicSchema,
	ReplaceMusicSchema,
	type CreateMusicDto,
	type ReplaceMusicDto,
	type UpdateMusicDto,
} from "../types/MusicDTO.js";
import MusicService from "../services/music.service.js";

const musicRepository = new MusicRepository();
const musicService = new MusicService();

export default class MusicController {
	async getSongs(req: Request, res: Response) {
		const songs = await musicService.getSongs();

		if (!songs) return res.sendStatus(404);

		return res.json({ songs });
	}

	async getSongsCount(req: Request, res: Response) {
		const count = await musicRepository.getSongsCount();

		if (!count) return res.sendStatus(404);

		return res.json({ count });
	}

	async getMusic(req: Request, res: Response) {
		const id = objectIdSchema.parse(req.params.id);

		const music = await musicService.getMusic(id);

		if (!music) return res.sendStatus(404);

		return res.json(music);
	}

	async postMusic(req: Request, res: Response) {
		const musicData: CreateMusicDto = CreateMusicSchema.parse(req.body);

		const music = await musicService.addMusic(musicData);

		if (!music) return res.sendStatus(404);

		return res.status(201).json(music);
	}

	async putMusic(req: Request, res: Response) {
		const id = objectIdSchema.parse(req.params.id);
		const musicData: ReplaceMusicDto = ReplaceMusicSchema.parse(req.body);

		const music = await musicService.replaceMusic(id, musicData);

		if (!music) return res.sendStatus(404);

		return res.status(200).json(music);
	}

	async patchMusic(req: Request, res: Response) {
		const id = objectIdSchema.parse(req.params.id);
		const musicData: UpdateMusicDto = ReplaceMusicSchema.parse(req.body);

		const music = await musicService.updateMusic(id, musicData);

		if (!music) return res.sendStatus(404);

		return res.status(200).json(music);
	}

	async deleteSongs(req: Request, res: Response) {
		const songs = await musicService.deleteSongs();

		if (!songs || songs.deletedCount === 0) return res.sendStatus(404);

		return res.sendStatus(204);
	}

	async deleteMusic(req: Request, res: Response) {
		const id = objectIdSchema.parse(req.params.id);

		const music = await musicService.deleteMusic(id);

		if (!music) return res.sendStatus(404);

		return res.sendStatus(204);
	}
}
