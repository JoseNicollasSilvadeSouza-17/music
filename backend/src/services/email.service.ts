import mjml2html from "mjml";
import { transport } from "../config/nodemailer.js";
import type { Email, Author, Title } from "../types/MusicTypes.js";
import emailTemplate from "../views/emailTemplate.view.js";

export default class EmailService {
	async sendWelcome(toEmail: Email, author: Author, title: Title) {
		const mjml = emailTemplate(author, title);

		const { html, errors } = await mjml2html(mjml);

		if (errors.length > 0) {
			console.error(errors);
			throw new Error("Failed to render email design.");
		}

		const emailOptions = {
			from: "Music <music@josenicollassilvadesouza.com>",
			to: toEmail,
			subject: "Welcome to the Music platform!",
			text: `Hello, ${author}! Your song ${title} has been successfully created.`,
			html,
		};

		await transport.sendMail(emailOptions);
	}
}
