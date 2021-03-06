import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledHomePage = styled.div`

  display: flex;
  background-color: ${({ theme }) => (theme === "light" ? colors.backgroundLight : colors.mulledWine )};
  margin: 50px;
  padding: 10px;
  justify-content: space-around;
  height: calc(85vh - 110px);
  border-radius: 15px;

  .bloc-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
  }

  p {
    font-size: 45px;
    font-weight: 600;
    color: ${({ theme }) => (theme === "light" ? 'black' : 'white' )}
  }

  a {
    color: white;
    border-radius: 15px;
    background-color: ${colors.primary};
    padding: 15px 30px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 600;
    transition: filter .5s;
    margin: 0 15px;
    width: 25%;
    text-align: center;

    :hover {
      filter: brightness(1.5);
    }
  }

  img {
    width: 35%;
  }

`;


export default StyledHomePage;
