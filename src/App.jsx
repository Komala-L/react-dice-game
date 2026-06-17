import { useState } from 'react'
import StartGame from './assets/components/StartGame'
import GamePlay from './assets/components/GamePlay';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };


  return (
    <div>
      {
        isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />
      }
    </div>
  )
}

export default App