import styled from "styled-components";
import colors from "../../utils/style/colors";


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 60%;
  transition: background-color .3s;
  margin: auto;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(88, 67, 228, 0.2);
    border: 1px solid #5843E4;
  }

  span {
    color: #5843e4;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }
  
  .span-name {
    font-size: 16px;
    font-weight: 500;
    color: black;
  }

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 12px;
  }
`;

export default CardWrapper;
