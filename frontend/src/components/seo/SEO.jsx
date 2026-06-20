import { Title, Meta } from "react-meta-seo";

export function SEO({ title, description }) {
	return (
		<>
			<Title>{title}</Title>

			<Meta name="description" content={description} />
		</>
	);
}
