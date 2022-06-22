import { Link } from "react-router-dom";

import StyledNavbar from "./headerStyle";

import logo from "../../assets/dark-logo.png";


function Header() {
  return (
    <StyledNavbar>
      <img src={logo} alt="logo" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/freelances">Freelances</Link>
        <Link className="link-bckg" to="/survey/1" $isFullLink>
          Faire le test
        </Link>
      </nav>
    </StyledNavbar>
  );
}

export default Header;
