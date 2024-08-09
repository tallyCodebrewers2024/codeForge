import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LANGUAGE_VERSIONS } from "@/constants";
import { Button } from "@/components/ui/button";

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div className="my-1">
      <p>Language: </p>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="h-7">{language}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-10">
          {languages.map(([language, version]) => (
            <DropdownMenuItem onClick={() => onSelect(language)}>
              {language}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelector;
