import React from "react";
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
    <div className="my-1">
      <p>Language: </p>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="h-7">{languges[language]}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-10">
          {languageEntries.map(([lang, version]) => (
            <DropdownMenuItem
              onClick={() => handleSelect(lang)}
              className={lang === language ? "bg-gray-300" : "bg-white"}
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
