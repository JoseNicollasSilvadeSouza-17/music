import musicSchema from "../models/Music.class.js";
import type {
	CreateClipDto,
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

	async addMusicUploadPoster(id: string, posterUrl: string) {
		return await musicSchema
			.findByIdAndUpdate(id, { posterUrl }, { returnDocument: "after" })
			.lean();
	}

	async addMusicUploadAudio(id: string, audioUrl: string) {
		return await musicSchema
			.findByIdAndUpdate(id, { audioUrl }, { returnDocument: "after" })
			.lean();
	}

	async addMusicUploadClip(id: string, clipData: CreateClipDto) {
		return await musicSchema
			.findByIdAndUpdate(id, { ...clipData }, { returnDocument: "after" })
			.lean();
	}

	async replaceMusic(id: string, musicData: ReplaceMusicDto) {
		return await musicSchema.findOneAndReplace({ _id: id }, musicData, {
			returnDocument: "after",
		});
	}

	async updateMusic(id: string, musicData: UpdateMusicDto) {
		return await musicSchema.findByIdAndUpdate(id, musicData, {
			returnDocument: "after",
		});
	}

	async deleteSongs() {
		return await musicSchema.deleteMany({});
	}

	async deleteMusic(id: string) {
		return await musicSchema.findByIdAndDelete(id);
	}
}
