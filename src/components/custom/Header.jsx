import { UserButton } from "@clerk/clerk-react";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

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
      <div>Header Logo</div>
      <Switch
        checked={theme === "dark"}
        onClick={toggleTheme}
        label="Dark Mode"
      />
    </div>
  );
};

export default Header;
