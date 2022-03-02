import { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { AnimatePresence, motion } from "framer-motion";

import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.css";

function Layout(props) {
  const defaultDark = useEffect(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    []
  );
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const toggleThemeHandler = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div data-theme={theme}>
      <AnimatePresence>
        <MainNavigation theme={theme} onClick={toggleThemeHandler} />
        <main className={classes.main}>{props.children}</main>
      </AnimatePresence>
    </div>
  );
}

export default Layout;
