import musicSchema from "../models/Music.class.js";
import type {
	CreateMusicDto,
	ReplaceMusicDto,
	UpdateMusicDto,
} from "../types/MusicDTO.js";

export default class MusicRepository {
	async getSongs() {
		return await musicSchema.find().lean();
	}

	async getSongsCount() {
		return await musicSchema.countDocuments().lean();
	}

	async getMusic(id: string) {
		return await musicSchema.findById(id).lean();
	}

	async addMusic(musicData: CreateMusicDto) {
		return await musicSchema.create(musicData);
	}

	async replaceMusic(id: string, musicData: ReplaceMusicDto) {
		return await musicSchema.findOneAndReplace({ _id: id }, musicData, {
			returnDocument: "after",
		});
	}

	async updateMusic(id: string, musicData: UpdateMusicDto) {
		return await musicSchema.findByIdAndUpdate(id, musicData, { new: true });
	}

	async deleteMusic(id: string) {
		return await musicSchema.findByIdAndDelete(id);
	}
}
