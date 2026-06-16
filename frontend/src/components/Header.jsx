import { Music4 } from "lucide-react";

export function Header({ children }) {
	return (
		<header className="header">
			<h1 className="header__title">
				<Music4 className="header__icon-music" size={40} strokeWidth={2.5} />
				usic
			</h1>

			<nav className="header__nav">
				<ul className="header__menu">{children}</ul>
			</nav>
		</header>
	);
}
