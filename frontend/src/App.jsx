import AppRouter from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<>
			<AppRouter />
			<ToastContainer theme="dark" autoClose={1000} />
		</>
	);
}

export default App;
