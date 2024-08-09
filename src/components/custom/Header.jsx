import { UserButton } from "@clerk/clerk-react";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [theme, setTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme ? savedTheme : null;
	});

	useEffect(() => {
		if (!theme) {
			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				setTheme("dark");
			} else {
				setTheme("light");
			}
		}
	}, []);

	useEffect(() => {
		if (theme === "light") {
			document.body.classList.remove("dark");
		} else {
			document.body.classList.add("dark");
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<div className="px-8 w-full h-12 shadow-lg justify-between">
			<nav className="navbar">
			<ul className="nav-links flex gap-4">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/problems">Problems</Link>
				</li>
				<li>
					<Link to="/contests">contest</Link>
				</li>
			</ul>
		</nav>
			<Switch
				checked={theme === "dark"}
				onClick={toggleTheme}
				label="Dark Mode"
			/>
		</div>
	);
};

export default Header;
