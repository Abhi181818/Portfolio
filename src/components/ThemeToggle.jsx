import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Switch from "react-switch";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center space-x-2">
      <FaSun className="text-yellow-500" />
      <Switch
        onChange={() => setIsDarkMode(!isDarkMode)}
        checked={isDarkMode}
        offColor="#4a5568"
        onColor="#1a202c"
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <FaMoon className="text-gray-400" />
    </div>
  );
};

export default ThemeToggle;