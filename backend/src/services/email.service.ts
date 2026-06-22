import { transport } from "../config/nodemailer.js";
import type { Email, Author, Title } from "../types/MusicTypes.js";

export default class EmailService {
	async sendWelcome(toEmail: Email, author: Author, title: Title) {
		const emailOptions = {
			from: "Music <music@josenicollassilvadesouza.com>",
			to: toEmail,
			subject: "Welcome to the Music platform!",
			text: `Hello, ${author}! Your song ${title} has been successfully created.`,
			html: `<h1>Hello, ${author}!</h1><p>Your song ${title} has been successfully created.</p>`,
		};

		const sendEmail = await transport.sendMail(emailOptions);

		return sendEmail;
	}
}
