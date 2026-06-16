export function Songs() {
	async function getSongs() {
		try {
			const response = await fetch("http://localhost:3000/api/v1/songs/", {
				method: "GET",
			});

			const songs = await response.json();

			console.log(songs);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<section className="app__songs">
				<ul className="app__list">
					<li className="app__item">
					</li>
				</ul>

				<button className="app__button" type="button">
					Imprimir
				</button>
			</section>
		</>
	);
}
