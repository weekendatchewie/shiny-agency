import styled from "styled-components";

const MainContainer = styled.div`
  
  margin: 25px 0;

  h1 {
    text-align: center;
  }

  .card-container {
    display: grid;
    gap: 50px 20px;
    padding: 15px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    justify-items: center;
    margin: 50px 0;
  }
  
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
  }
`;

export default MainContainer;
