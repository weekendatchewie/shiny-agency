import { useContext } from "react";

import { SurveyContext } from "../../utils/context";
import { useFetch, useTheme } from "../../utils/hooks";

import { Loader } from "../../utils/style/atoms";
import { Link } from "react-router-dom";
import StyledResults from "./resultsStyle";


export function formatFetchParams(answers) {
    const answerNumbers = Object.keys(answers)
    
    return answerNumbers.reduce((previousParams, answerNumber, index) => {
        const isFirstParam = index === 0
        const separator = isFirstParam ? '' : '&'
        return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
    }, '')
}


export function formatJobList(title, listLength, index) {
    if (index === listLength - 1) {
        return title
    }
    return `${title},`
}

function Results() {
    
    const { theme } = useTheme();
    const { answers } = useContext(SurveyContext);
    
    const fetchParams = formatFetchParams(answers);
    
    const { data, isLoading, error } = useFetch(
        `http://localhost:8000/results?${fetchParams}`
    );
    
    if (error) {
        return <span>Il y a un problème</span>;
    }
    
    const resultsData = data?.resultsData;
    
    
    return isLoading ? (
        <div className="loader-wrapper">
            <Loader />
        </div>
    ) : (
        <StyledResults theme={theme}>
            <h2 theme={theme}>
                Les compétences dont vous avez besoin :
                {resultsData &&
                    resultsData.map((result, index) => (
                        <span
                            className="job-title"
                            key={`result-title-${index}-${result.title}`}
                            theme={theme}
                        >
                            {formatJobList(result.title, resultsData.length, index)}
                        </span>
                    ))}
            </h2>
            <Link to="/freelances">
                Découvrez nos profils
            </Link>
            <div className="description-wrapper">
                {resultsData &&
                    resultsData.map((result, index) => (
                        <div
                            className="job-description"
                            theme={theme}
                            key={`result-detail-${index}-${result.title}`}
                        >
                            <span className="job-title" theme={theme}>{result.title}</span>
                            <p>{result.description}</p>
                        </div>
                    ))}
            </div>
        </StyledResults>
    );
}

export default Results;
