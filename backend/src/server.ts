import "@dotenvx/dotenvx/config";
import { PORT } from "./config/constants.js";
import app from "./app.js";
import connectDb from "./database/mongodb.js";

async function main() {
	try {
		await connectDb();

		app.listen(PORT, () => {
			console.log(`Server running on port http://localhost:${PORT}`);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

main();