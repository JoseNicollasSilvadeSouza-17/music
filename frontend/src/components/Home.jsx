import { currentYear } from "../utils/date";

export function Home() {
	async function submit(event) {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);

		const musicData = Object.fromEntries(formData.entries());

		musicData.year = Number(musicData.year);

		try {
			const response = await fetch("http://localhost:3000/api/v1/songs/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(musicData),
			});

			const result = await response.json();
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<section className="app__hero">
				<img className="app__img" src="/src/assets/banner.png" alt="Banner" />

				<p className="app__p">
					Crie sua música com o software Music! Aqui você pode criar as melhores
					músicas do mundo e navegar pelos álbuns de outras pessoas.{" "}
					<strong>Participe e interaja bastante no Music!</strong>
				</p>
			</section>

			<form className="app__form" method="post" onSubmit={submit}>
				<h2 className="app__title">Sua Música</h2>

				<label className="app__label" htmlFor="title">
					Título:
					<input
						className="app__input"
						id="title"
						type="text"
						name="title"
						autoComplete="on"
						required
						placeholder="Ex.: ¿Pregunta?"
					/>
				</label>

				<label className="app__label" htmlFor="author">
					Autor:
					<input
						className="app__input"
						id="author"
						type="text"
						name="author"
						autoComplete="name"
						required
						placeholder="Ex.: José Nícollas Silva de Souza"
					/>
				</label>

				<label className="app__label" htmlFor="description">
					Descrição:
					<textarea
						className="app__textarea"
						id="description"
						name="description"
						required
						placeholder="Ex.: Crie para a pessoa que eu amor!"
					></textarea>
				</label>

				<label className="app__label" htmlFor="email">
					E-mail:
					<input
						className="app__input"
						id="email"
						type="email"
						name="email"
						autoComplete="email"
						required
						placeholder="Ex.: josenicollas@example.com"
					/>
				</label>

				<label className="app__label" htmlFor="year">
					Ano de Criação:
					<input
						className="app__input"
						id="author"
						type="number"
						name="year"
						autoComplete="y"
						required
						min="1900"
						max={currentYear}
						placeholder="Ex.: 2023"
						list="years"
					/>
					<datalist id="years">
						<option value="2026"></option>
						<option value="2020"></option>
						<option value="2010"></option>
						<option value="2000"></option>
						<option value="1990"></option>
						<option value="1980"></option>
						<option value="1970"></option>
						<option value="1960"></option>
						<option value="1950"></option>
						<option value="1900"></option>
					</datalist>
				</label>

				<button className="app__button" type="submit">
					Criar Música
				</button>
			</form>
		</>
	);
}
