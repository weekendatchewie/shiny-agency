import styled from "styled-components";
import colors from "../../utils/style/colors";

const MainContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background-color: #e6e2fc;
  margin: 50px auto;
  width: 75%;
  border: 3px solid indigo;
  border-radius: 15px;
  
  .bloc-link {
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    
    a {
      margin: 0 15px;
      text-decoration: none;
      color: ${colors.primary};
      
      &:hover {
        filter: brightness(1.3);
      }
    }
  }
`;

export default MainContainer;