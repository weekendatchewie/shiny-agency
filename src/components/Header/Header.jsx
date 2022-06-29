import { Link } from "react-router-dom";

import StyledNavbar from "./headerStyle";

import logo from "../../assets/dark-logo.png";
import { useTheme } from "../../utils/hooks";

function Header() {
    
    const { theme, toggleTheme } = useTheme();
    
    return (
        <StyledNavbar theme={theme}>
            <img src={logo} alt="logo" />
            <nav>
                <button onClick={() => toggleTheme()}>{theme === "light" ? "☀️" : "🌙"}</button>
                <Link to="/">Accueil</Link>
                <Link to="/freelances">Freelances</Link>
                <Link $isfulllink className="link-bckg" to="/survey/1">
                    Faire le test
                </Link>
            </nav>
        </StyledNavbar>
    );
}

export default Header;
