import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
  }

`;

export default StyledFooter;
