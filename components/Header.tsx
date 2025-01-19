import { HomeIcon, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

const navMenu = ["Experience", "Projects", "About"];

const Header = () => {
  return (
    <header className="max-w-5xl mx-auto px-6 py-5 flex justify-between sticky top-0 transition-all duration-300 z-50">
      <h1>
        <HomeIcon />
      </h1>

      {/* Dekstop Mode */}
      <ul className="hidden sm:flex gap-3">
        {navMenu.map((menu, index) => (
          <li key={index}>
            <a href={`#${menu}`} className="hover:text-white cursor-pointer">
              {menu}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Mode */}
      <div className="sm:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-950 text-white p-2">
            <DropdownMenuGroup>
              {navMenu.map((menu, index) => (
                <DropdownMenuItem key={index}>
                  <a
                    href={`#${menu}`}
                    className="hover:text-white cursor-pointer"
                  >
                    {menu}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
export default Header;
