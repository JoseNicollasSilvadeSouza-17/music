export function Footer() {
	const currentYear = new Date().getFullYear().toString();

	return (
		<footer className="footer">
			<small className="footer__copyright">
				Copyright &copy;{" "}
				<time className="footer__year" dateTime={{ currentYear }}>
					{currentYear}
				</time>{" "}
				José Nícollas Silva de Souza - Todos os direitos reservados.
			</small>
		</footer>
	);
}
