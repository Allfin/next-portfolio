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
import { siteConfig } from "@/config";

const Header = () => {
  return (
    <header className="max-w-5xl mx-auto px-6 py-5 flex justify-between sticky top-0 transition-all duration-300 z-50">
      <h1>
        <HomeIcon />
      </h1>

      {/* Dekstop Mode */}
      <ul className="hidden sm:flex gap-3">
        {siteConfig.navLinks.map((menu, index) => (
          <li key={index}>
            <a
              href={`${menu.href}`}
              className="hover:text-white cursor-pointer"
            >
              {menu.text}
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
              {siteConfig.navLinks.map((menu, index) => (
                <DropdownMenuItem key={index}>
                  <a
                    href={`${menu.href}`}
                    className="hover:text-white cursor-pointer"
                  >
                    {menu.text}
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
