import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContainer from "./surveyStyle";
import { Loader } from "../../utils/style/atoms";

function Survey() {

  const [surveyData, setssurveyData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  useEffect(() => {
    setIsDataLoading(true);
    fetch("http://localhost:8000/survey")
      .then(response => response.json())
      .then(({ surveyData }) => {
        setssurveyData(surveyData);
        setIsDataLoading(false);
      })
      .catch((error) => console.log(error));

  }, []);

  const { questionNumber } = useParams();

  const questionNumberInt = parseInt(questionNumber);

  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
  const nextQuestionNumber = questionNumberInt + 1;

  return (
    <MainContainer>
      <h1>Questionnaire sur vos attentes 🚀🚀</h1>
      <h2>Question {questionNumber}</h2>

      {isDataLoading ? <Loader /> :
        <p>{surveyData[questionNumber]}</p>
      }

      <div className="bloc-link">
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </div>

    </MainContainer>
  );
}

export default Survey;
