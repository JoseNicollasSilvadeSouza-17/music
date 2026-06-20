import { Outlet } from "react-router-dom";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { VLibras } from "./layout/VLibras";

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
