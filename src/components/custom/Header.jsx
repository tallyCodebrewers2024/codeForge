import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";
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
		<div className="flex flex-row px-8 h-12 justify-between items-center w-full border-b-2 max-w-[1200px] self-center">
			<nav className="navbar">
				<ul className="nav-links flex flex-row gap-4 items-center">
					<img src="/logo.png" alt="logo" className="h-8 w-8" />
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/problems">Problems</Link>
					</li>
					<li>
						<Link to="/contests">Contest</Link>
					</li>
					<li>
						<Link to="/playground">Playground</Link>
					</li>
				</ul>
			</nav>
			<div className="flex flex-row gap-4 items-center">
				<Switch
					checked={theme === "dark"}
					onClick={toggleTheme}
					label="Dark Mode"
				/>
				{theme === "dark" ? (
					<Moon className="h-6 w-6" />
				) : (
					<Sun className="h-6 w-6" />
				)}
			</div>
		</div>
	);
};

export default Header;
