import { model, Schema } from "mongoose";
import type { IMusic } from "../types/IMusic.js";

const music = new Schema<IMusic>(
	{
		title: {
			type: String,
			required: true,
			trim: true
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		author: {
			type: String,
			required: true,
			trim: true
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		year: {
			type: Number,
			required: true,
		},
		posterUrl: {
			type: String,
			required: false,
			trim: true
		},
		audioUrl: {
			type: String,
			required: false,
			trim: true
		},
		clipUrl: {
			type: String,
			required: false,
			trim: true
		},
		caption: {
			type: Map,
			of: String,
			required: false
		},
		isoZipUrl: {
			type: String,
			required: false,
			trim: true
		}
	},
	{
		timestamps: true,
		versionKey: false
	},
);

const musicSchema = model<IMusic>("Music", music);

export default musicSchema;