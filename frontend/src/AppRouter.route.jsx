import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Error404 } from "./components/Error404";
import { Home } from "./components/pages/Home";
import Layout from "./components/Layout";
import { Loading } from "./components/ui/Loading";

const Songs = lazy(() => import("./components/pages/Songs"));

export default function AppRouter() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />

				<Route
					path="/songs"
					element={
						<Suspense fallback={<Loading />}>
							<Songs />
						</Suspense>
					}
				/>
				<Route path="*" element={<Error404 />} />
			</Route>
		</Routes>
	);
}
