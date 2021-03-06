import { Link } from "react-router-dom";

import StyledHomePage from "./homeStyle";

import imgHomePage from "../../assets/office.png";
import { useTheme } from "../../utils/hooks";

function Home() {
    
    const { theme } = useTheme()
    
    return (
        <StyledHomePage theme={theme}>
            <div className="bloc-home">
                <p>Repérez vos besoins, et on s'occupe de vous trouver les meilleurs talents pour briller</p>
                <Link to="/survey/1">Faire le test</Link>
            </div>
            <img src={imgHomePage} alt="" />
        </StyledHomePage>
    );
}

export default Home;