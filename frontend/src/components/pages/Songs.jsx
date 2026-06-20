import { useState, useEffect } from "react";
import { Printer } from "lucide-react";
import { SEO } from "../seo/SEO";

export default function Songs() {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		const controller = new AbortController();
		async function getSongs() {
			try {
				const response = await fetch("http://localhost:3000/api/v1/songs/", {
					method: "GET",
					signal: controller.signal,
				});

				const data = await response.json();

				setSongs(data.songs);
			} catch (error) {
				if (!error.name !== "AbortError") return;
				console.error(error);
			}
		}

		getSongs();

		return () => {
			controller.abort;
		};
	}, []);
	return (
		<>
			<SEO
				title="Music - Songs"
				description="Olhe a lista das melhores músicas criada da Terra no Music!🎵"
			/>

			<section className="app__songs">
				<ul className="app__list">
					{songs.map((song) => (
						<li className="app__item" key={song._id || song.id}>
							<span className="app__song-title">{song.title}</span>
							<p className="app__p">Descrição: {song.description}</p>
							<time className="app__year" dateTime={song.year}>
								{song.year}
							</time>
						</li>
					))}
				</ul>

				<button
					className="app__button"
					type="button"
					onClick={() => {
						window.print();
					}}
				>
					<Printer />
				</button>
			</section>
		</>
	);
}
