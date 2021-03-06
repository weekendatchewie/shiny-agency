import styled from "styled-components";
import colors from "../../utils/style/colors";


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 45px;
  background-color: ${({ theme }) => theme === 'light' ? colors.backgroundLight : colors.mulledWine};
  border-radius: 30px;
  width: 60%;
  transition: background-color .4s;
  margin: auto;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: rgba(88, 67, 228, 0.2);
    border: 1px solid ${({ theme }) => theme === 'light' ? colors.primary : colors.lightPurple};
  }

  span {
    color: ${({ theme }) => theme === 'light' ? colors.primary : colors.lightPurple};
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    text-align: center;
  }

  .span-name {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme === 'light' ? 'black' : 'white'};
  }

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 12px;
    border: 4px solid ${({ theme }) => theme === 'light' ? colors.primary : colors.lightPurple};
  }
`;

export default CardWrapper;
