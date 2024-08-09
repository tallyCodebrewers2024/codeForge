import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LANGUAGE_VERSIONS, languges } from "@/constants";
import { Button } from "@/components/ui/button";

const languageEntries = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
	const handleSelect = (lang) => {
		if (lang !== language) {
			onSelect(lang);
		}
	};

	return (
		<div className="flex flex-row gap-2">
			<p className="font-semibold text-lg">Language: </p>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Button className="h-7">{languges[language]}</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{languageEntries.map(([lang, version]) => (
						<DropdownMenuItem
							key={lang}
							onClick={() => handleSelect(lang)}
							className={
								lang === language
									? "bg-gray-300 dark:bg-gray-700"
									: "bg-white dark:bg-gray-800"
							}
						>
							{languges[lang]}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default LanguageSelector;
