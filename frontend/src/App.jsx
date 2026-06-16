import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Songs } from "./components/Songs";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import { VLibras } from "./components/VLibras";

function App() {
	const [page, setPage] = useState("/home");

	return (
		<>
			<Header>
				<li className="header__item">
					<button
						className="header__button"
						type="button"
						onClick={() => setPage("/home")}
					>
						Inicial
					</button>
				</li>

				<li className="header__item">
					<button
						className="header__button"
						type="button"
						onClick={() => setPage("/songs")}
					>
						Músicas
					</button>
				</li>
			</Header>
			<main className="app">
				{page === "/home" && <Home />}
				{page === "/songs" && <Songs />}
			</main>
			<Footer />
			<VLibras />
		</>
	);
}

export default App;
