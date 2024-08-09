import { UserButton } from "@clerk/clerk-react";
import React from "react";

const Header = () => {
  return (
    <div className="px-8 w-full h-12 shadow-lg justify-between">
      <div>Header Logo</div>
      <UserButton />
    </div>
  );
};

export default Header;
