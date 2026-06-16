import { Routes, Route } from "react-router-dom";
import { Error404 } from "./components/Error404";
import { Home } from "./components/Home";
import { Songs } from "./components/Songs";
import Layout from "./components/Layout";

export default function AppRouter() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/songs" element={<Songs />} />
				<Route path="*" element={<Error404 />} />
			</Route>
		</Routes>
	);
}
