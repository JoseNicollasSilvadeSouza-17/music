import { Outlet } from "react-router-dom";
import { Header } from "./Layout/Header";
import { Footer } from "./Layout/Footer";
import { VLibras } from "./Layout/VLibras";

export default function Layout() {
	return (
		<>
			<Header />
			<main className="app">
				<Outlet />
			</main>

			<Footer />
			<VLibras />
		</>
	);
}
