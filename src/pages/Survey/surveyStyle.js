import styled from "styled-components";
import colors from "../../utils/style/colors";


export const ButtonReply = styled.button`
  border: none;
  padding: 30px 65px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  transition: background-color .4s;
  box-shadow: ${(props) =>
          props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};

  &:first-child {
    margin-right: 15px;
  }

  &:last-of-type {
    margin-left: 15px;
  }

  &:hover {
    background-color: rgba(88, 67, 228, 0.2);
  }
`

export const MainContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  background-color: #e6e2fc;
  margin: 50px auto;
  width: 75%;
  border: 3px solid indigo;
  border-radius: 15px;

  .reply-wrapper {
    display: flex;
    flex-direction: row;
  }
  
  .paragraph-question {
    margin: 25px 0 50px 0;
  }
  
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

