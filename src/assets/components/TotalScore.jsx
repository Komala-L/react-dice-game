import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoredContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoredContainer>
  );
};

export default TotalScore

const ScoredContainer = styled.div`
    max-width: 200px;
    text-align: center;
    margin: 0;
    h1 {
        font-size: 100px;
        margin: 0;
    }

    p { 
        font-size: 24px;
        font-weight: 500px;
        margin: 0;
    }
`;