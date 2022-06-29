import { Link, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { MainContainer, ButtonReply } from "./surveyStyle";
import { Loader } from "../../utils/style/atoms";
import { SurveyContext } from "../../utils/context";
import { useFetch } from "../../utils/hooks";

function Survey() {
    
    const { questionNumber } = useParams();
    
    const { data, isLoading, error } = useFetch("http://localhost:8000/survey");
    
    const { surveyData } = data;
    
    const questionNumberInt = parseInt(questionNumber);
    
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
    
    const { answers, saveAnswers } = useContext(SurveyContext);
    
    function saveReply(answer) {
        saveAnswers({ [questionNumber]: answer });
    }
    
    if (error) {
        return <span>Oups il y a eu un problème</span>;
    }
    
    return (
        <MainContainer>
            <h1>Questionnaire sur vos attentes 🚀🚀</h1>
            {isLoading ? <Loader /> :
                <>
                    <h2>Question {questionNumber}</h2>
                    
                    
                    {surveyData && <p className="paragraph-question">{surveyData[questionNumber]}</p>}
                    
                    
                    <div className="reply-wrapper">
                        <ButtonReply
                            className="reply-btn"
                            onClick={() => saveReply(true)}
                            isSelected={answers[questionNumber] === true}
                        >
                            Oui
                        </ButtonReply>
                        <ButtonReply
                            className="reply-btn"
                            onClick={() => saveReply(false)}
                            isSelected={answers[questionNumber] === false}
                        >
                            Non
                        </ButtonReply>
                    </div>
                    
                    <div className="bloc-link">
                        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                        {surveyData && surveyData[questionNumberInt + 1] ? (
                            <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                        ) : (
                            <Link to="/results">Résultats</Link>
                        )}
                    </div>
                
                </>
            }
        </MainContainer>
    
    );
}

export default Survey;
