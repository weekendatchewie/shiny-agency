import page404 from "../../assets/page404.png";
import StyledError from "./errorStyle";

function Error() {
    return (
        <StyledError>
            <img src={page404} alt="erreur404" />
            <h1>Oups 🙈 Il semble que cette page n'existe pas...</h1>
        </StyledError>
    );
}

export default Error;
