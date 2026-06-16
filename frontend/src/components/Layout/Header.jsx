import { Music4 } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className="header">
			<h1 className="header__title">
				<Music4 className="header__icon-music" size={40} strokeWidth={2.5} />
				usic
			</h1>

			<nav className="header__nav">
				<ul className="header__menu">
					<li className="header__item">
						<Link to="/">Inicial</Link>
					</li>

					<li className="header__item">
						<Link to="/songs">Músicas</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
