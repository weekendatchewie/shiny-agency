import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: #F9F9FC;
  margin-top: auto;

  p {
    color: ${colors.secondary};
    font-size: 14px;
  }

`;

export default StyledFooter;
