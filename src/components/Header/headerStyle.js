import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledNavbar = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  img {
    width: 130px;
  }

  nav {
    display: flex;
  }

  a {
    padding: 15px;
    color: ${({ theme }) => theme === 'light' ? '#8186a0' : 'white'};
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    transition: filter .5s;
    margin: 0 15px;

    /* Quand le style est extrait dans un autre fichier, cette syntaxe pour utiliser les props ne fonctionne */
    ${(props ) => props.$isFullLink && `color: white; border-radius: 30px; background-color: ${colors.primary};`}
    
    
    &:hover {
      filter: ${({ theme }) => theme === 'light' ? 'brightness(1.5)' : 'brightness(0.7)'};
    }
  }

  .link-bckg {
    color: white;
    border-radius: 15px;
    background-color: ${colors.primary};
    padding: 15px 30px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
    font-size: 35px;
  }
`;

export default StyledNavbar;
