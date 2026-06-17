import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../../styled/Button";
import { OutlineButton } from "../../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState(""); 
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 6);
      setCurrentDice((prev) => randomNumber);

      if (selectedNumber === randomNumber) {
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => prev - 2);
      }

      setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
    setError("");
    setShowRules(false);
  }

  return (
    <MainContainer>
      <div className="top_section">
        < TotalScore score={score} />
        < NumberSelector 
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice 
        currentDice={currentDice}
        roleDice={roleDice}
      />
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules(!showRules)}>{showRules ? "Hide" : "Show"} Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay

const MainContainer = styled.main`
  padding-top: 30px;
  padding-bottom: 40px;

  .top_section {
    display: flex;
    align-items: end;
    justify-content: space-around;
  }
  .btn {
    margin-top: 25px;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;
    flex-direction: column;
  }
`;