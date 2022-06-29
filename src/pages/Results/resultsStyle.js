import styled from "styled-components";
import colors from "../../utils/style/colors";

const StyledResults = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
          theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  
  h2 {
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
    font-weight: bold;
    font-size: 28px;
    max-width: 60%;
    text-align: center;
    & > span {
      padding-left: 10px;
    }
  }
  
  .description-wrapper {
    padding: 60px;
  }
  
  .job-title {
    color: ${({ theme }) =>
            theme === 'light' ? colors.primary : colors.backgroundLight};
    text-transform: capitalize;
  }
  
  .job-description {
    font-size: 18px;
    & > p {
      color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
      margin-block-start: 5px;
    }
    & > span {
      font-size: 20px;
    }
  }
  
  .loader-wrapper {
    display: flex;
    justify-content: center;
  }

`

export default StyledResults;