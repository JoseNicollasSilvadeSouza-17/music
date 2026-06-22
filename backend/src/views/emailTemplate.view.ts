import type { Author, Title } from "../types/MusicTypes.js";

function emailTemplate(author: Author, title: Title) {
	return `
		<mjml>
			<mj-head>
				<mj-title>Welcome to the Music platform!</mj-title>
			</mj-head>

			<mj-body>
				<mj-section>
					<mj-column>
						<mj-text>Hello, ${author}</mj-text>
					
						<mj-divider/>
					
						<mj-text>Your song ${title} has been successfully created.</mj-text>
					</mj-column>
				</mj-section>
			</mj-body>
		</mjml>
	`;
}

export default emailTemplate;
