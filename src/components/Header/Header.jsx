import { Link } from "react-router-dom";

import StyledNavbar from "./headerStyle";

import logo from "../../assets/dark-logo.png";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";


function Header() {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <StyledNavbar>
      <img src={logo} alt="logo" />
      <nav>
        <button onClick={() => toggleTheme()}>{theme === 'light' ? '☀️' : '🌙'}</button>
        <Link to="/">Accueil</Link>
        <Link to="/freelances">Freelances</Link>
        <Link className="link-bckg" to="/survey/1">
          Faire le test
        </Link>
      </nav>
    </StyledNavbar>
  );
}

export default Header;
