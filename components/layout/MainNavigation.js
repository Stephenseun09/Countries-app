import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import classes from "./MainNavigation.module.css";

function MainNavigation({ theme, onClick }) {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Where in the world?</div>
      <div className={classes.toggler} onClick={onClick}>
        {theme !== "light" && <SunIcon color="white" />}
        {theme === "light" && <MoonIcon />}
        <span id="mode">{theme !== "light" ? "Light mode" : "Dark Mode"}</span>
      </div>
    </header>
  );
}

export default MainNavigation;
