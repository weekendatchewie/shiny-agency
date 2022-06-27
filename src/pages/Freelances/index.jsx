import Card from "../../components/Card";

import MainContainer from "./freelancesStyle";
import { useEffect, useState } from "react";
import { Loader } from "../../utils/style/atoms";

const DefaultPicture = "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";

const freelanceProfiles = [
  {
    name: "Luna Lovegood",
    job: "Devops",
    picture: DefaultPicture
  },
  {
    name: "Harry Potter",
    job: "Développeur Frontend",
    picture: DefaultPicture
  },
  {
    name: "Norbert Dragonneau",
    job: "Développeur Mobile",
    picture: DefaultPicture
  },
  {
    name: "Tina Goldstein",
    job: "UX-UI Designer",
    picture: DefaultPicture
  },
  {
    name: "Jacob Kowalski",
    job: "Dev React/React Native",
    picture: DefaultPicture
  },
  {
    name: "Queenie Goldstein",
    job: "Développeuse Symfony",
    picture: DefaultPicture
  },
  {
    name: "Hermione Granger",
    job: "Développeuse Fullstack",
    picture: DefaultPicture
  },
  {
    name: "Ginny Weasley",
    job: "Développeuse VueJS",
    picture: DefaultPicture
  },
  {
    name: "Ronald Weasley",
    job: "Développeur React/Node",
    picture: DefaultPicture
  }
];

function Index() {

  const [freelancesData, setFreelancesData] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(false);

  function mapData() {
    let dataToMap = freelanceProfiles;
    if (freelancesData) {
      dataToMap = freelancesData;
    } else {
      dataToMap = freelanceProfiles;
    }
    return dataToMap;
  }

  useEffect(() => {
    setIsDataLoading(true);
    async function loadFreelances() {
      try {
        const response = await fetch("http://localhost:8000/freelances");
        const { freelancersList } = await response.json();
        setFreelancesData(freelancersList);
      } catch (error) {
        console.log(error);
      } finally {
        setIsDataLoading(false);
      }
    }

    loadFreelances();
  }, []);


  return (
    <MainContainer>
      <h1>Profils de nos freelances 💻</h1>
      {isDataLoading ?
        <div className="loader">
          <Loader />
        </div>
        :
        <div className="card-container">
          {mapData().map((item, index) => (
            <Card key={`${item.name}-${index}`}
                  label={item.name}
                  title={item.job}
                  picture={item.picture}
            />
          ))}
        </div>
      }
    </MainContainer>
  );
}

export default Index;
