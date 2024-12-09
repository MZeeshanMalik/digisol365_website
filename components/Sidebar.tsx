import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "@/src/context/ThemeContext";
import RotatingButton from "./RotatingButton";

const Sidebar = () => {
  const { state } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Sidebar Button */}
      <div className="w-[8%] flex flex-col justify-around fixed top-0 left-0 h-full bg-background dark:bg-card text-foreground dark:text-card-foreground transition-all duration-500 ease-in-out items-center z-50">
        <div className="mb-4 text-xl">Logo</div>
        <button onClick={toggleMenu} className="mb-4">
          {isOpen ? (
            <XIcon color={state.theme === "dark" ? "white" : "black"} />
          ) : (
            <MenuIcon color={state.theme === "dark" ? "white" : "black"} />
          )}
        </button>
        <button className="bg-muted text-muted-foreground dark:bg-accent dark:text-accent-foreground rounded">
          <RotatingButton />
        </button>
      </div>

      {/* Full-Screen Menu */}
      <div
        className={`fixed inset-0 bg-background dark:bg-card text-foreground dark:text-card-foreground transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        {/* Close Menu Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-3xl focus:outline-none"
        >
          <XIcon />
        </button>

        {/* Menu Content */}
        <div className="flex flex-col justify-center items-center h-full space-y-8">
          <ul className="text-3xl font-semibold space-y-6">
            <li className="group">
              <button className="hover:text-buttoncolorhover focus:outline-none">
                <a href="/">Home</a>
              </button>
            </li>
            <li className="group relative">
              <button className="hover:text-buttoncolorhover focus:outline-none">
                Services
              </button>
            </li>
            <li className="group relative">
              <button className="hover:text-buttoncolorhover focus:outline-none">
                <a href="/about">About</a>
              </button>
            </li>
            <li>
              <button className="hover:text-buttoncolorhover">Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
