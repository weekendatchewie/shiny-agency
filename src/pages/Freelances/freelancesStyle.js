import styled from "styled-components";

const MainContainer = styled.div`

  h1 {
    text-align: center;
  }

  .card-container {
    display: grid;
    gap: 50px 20px;
    padding: 15px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    justify-items: center;
  }
`;

export default MainContainer;
