import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix} from '@fortawesome/free-solid-svg-icons'

const RoleDice = ({ roleDice, currentDice }) => {
    const diceIcons = {
    1: faDiceOne,
    2: faDiceTwo,
    3: faDiceThree,
    4: faDiceFour,
    5: faDiceFive,
    6: faDiceSix
  }

  return (
    <DiceContainer>
     <div className='dice' onClick={roleDice}>
        <FontAwesomeIcon icon= {diceIcons[currentDice]} size='10x'/>
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    p {
      font-size: 24px;
    }

    .dice {
      cursor: pointer;

    }
`;