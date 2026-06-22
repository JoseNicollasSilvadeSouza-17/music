import nodemailer from "nodemailer";
import {
	MAILTRAP_HOST,
	MAILTRAP_PASS,
	MAILTRAP_PORT,
	MAILTRAP_USER,
} from "./constants.js";

const transport = nodemailer.createTransport({
	host: MAILTRAP_HOST,
	port: MAILTRAP_PORT,
	auth: {
		user: MAILTRAP_USER,
		pass: MAILTRAP_PASS,
	},
});

export { transport };
