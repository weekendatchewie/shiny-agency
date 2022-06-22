import Card from "../../components/Card";
import styled from "styled-components";

const DefaultPicture = "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";

const freelanceProfiles = [
  {
    name: "Luna Lovegood",
    jobTitle: "Devops",
    picture: DefaultPicture
  },
  {
    name: "Harry Potter",
    jobTitle: "Développeur Frontend",
    picture: DefaultPicture
  },
  {
    name: "Hermione Granger",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture
  },
  {
    name: "Ronald Weasley",
    jobTitle: "Développeur Backend",
    picture: DefaultPicture
  },
];

const CardsContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-rows: 290px 290px;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
`;


function Index() {
  return (
    <div>
      <h1>Freelances 💻💻</h1>
      <CardsContainer>
        {freelanceProfiles.map((item, index) => (
          <Card key={`${item.name}-${index}`}
                label={item.name}
                title={item.jobTitle}
                picture={item.picture}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

export default Index;
