import type { IMusic } from "../types/IMusic.js";
import type { CreateMusicDto } from "../types/MusicDTO.js";

const hostExample = "http://file.example.teste/";

const exampleSimple: CreateMusicDto = {
	title: "Disc Zé Do Arrocha",
	description:
		"Música muito boa sô, feita para se divertir e aproceitar a beleza do mundo",
	author: "Zé do Dog",
	email: "zedog@teste.teste",
	year: 2026,
};

const exampleComplete: IMusic = {
	...exampleSimple,
	posterUrl: `${hostExample}/posters/ze-dog`,
	audioUrl: `${hostExample}/audios/ze-dog`,
	clipUrl: `${hostExample}/clip/ze-dog`,
	caption: {
		en: "Auuuuuu Arrocha! Let's go, everyone...",
		es: "¡Auuuuuu Arrocha! ¡Vamos, todos...",
		gl: "Auuuuuu Arrocha! Imos todos...",
		"pt-BR": "Auuuuuu Arrocha! Simbora minha gente...",
		"pt-PT": "Auuuuuu Arrocha! Simbora minha gente...",
	},
	isoZipUrl: `${hostExample}/iso/zip/ze-dog`,
};

export { exampleSimple, exampleComplete };
