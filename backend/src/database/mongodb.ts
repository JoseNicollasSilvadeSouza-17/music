import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import { MONGODB_URI } from "../config/constants.js";
import mongoose from "mongoose";

const uri = MONGODB_URI;

async function connectDb() {
	await mongoose.connect(uri);
}

export default connectDb;