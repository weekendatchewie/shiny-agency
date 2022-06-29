import StyledFooter from "./footerStyle";
import { useTheme } from "../../utils/hooks";

function Footer() {
    
    const { theme } = useTheme()
    
    return (
        <StyledFooter theme={theme}>
            <p>Made with ❤️</p>
        </StyledFooter>
    );
}

export default Footer;