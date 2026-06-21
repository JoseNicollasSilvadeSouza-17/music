import type { IMusic } from "../types/IMusic.js";
import type { CreateMusicDto } from "../types/MusicDTO.js";

const hostExample = "http://file.example.test";

const poster: IMusic["posterUrl"] = `${hostExample}/posters/ze-dog.png`;

const audio: IMusic["audioUrl"] = `${hostExample}/audios/ze-dog.mp3`;

const clip: IMusic["clipUrl"] = `${hostExample}/clip/ze-dog.mp4`;

const captions: IMusic["caption"] = {
	el: "Αααααα, Arrocha! Πάμε, παιδιά...",
	en: "Auuuuuu Arrocha! Let\'s go, everyone...",
	"es-ES": "¡Auuuuuu, Arrocha! Vamos allá, gente...",
	"es-419": "¡Auuuuuu, Arrocha! Vamos, gente...",
	fr: "Auuuuuu, c\'est parti ! Allez, les amis...",
	gl: "Auuuuuu Arrocha! Imos todos...",
	it: "Auuuuuu, forza! Andiamo, gente...",
	la: "Euge! Incipiamus hanc festationem! Agite, omnes...",
	"pt-BR": "Auuuuuu Arrocha! Simbora minha gente...",
	"pt-PT": "Auuuuuu Arrocha! Simbora minha gente...",
};

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
	posterUrl: poster,
	audioUrl: audio,
	clipUrl: clip,
	caption: captions,
	isoZipUrl: `${hostExample}/iso/zip/ze-dog.zip`,
};

export { exampleSimple, exampleComplete };
