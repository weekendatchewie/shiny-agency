import Card from "../../components/Card";

import MainContainer from "./freelancesStyle";

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
    name: "Norbert Dragonneau",
    jobTitle: "Développeur Mobile",
    picture: DefaultPicture
  },
  {
    name: "Tina Goldstein",
    jobTitle: "UX-UI Designer",
    picture: DefaultPicture
  },
  {
    name: "Jacob Kowalski",
    jobTitle: "Dev React/React Native",
    picture: DefaultPicture
  },
  {
    name: "Queenie Goldstein",
    jobTitle: "Développeuse Symfony",
    picture: DefaultPicture
  },
  {
    name: "Hermione Granger",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture
  },
  {
    name: "Ginny Weasley",
    jobTitle: "Développeuse VueJS",
    picture: DefaultPicture
  },
  {
    name: "Ronald Weasley",
    jobTitle: "Développeur React/Node",
    picture: DefaultPicture
  }
];


function Index() {
  return (
    <MainContainer>
      <h1>Profils de nos freelances 💻</h1>
      <div className="card-container">
        {freelanceProfiles.map((item, index) => (
          <Card key={`${item.name}-${index}`}
                label={item.name}
                title={item.jobTitle}
                picture={item.picture}
          />
        ))}
      </div>
    </MainContainer>
  );
}

export default Index;
