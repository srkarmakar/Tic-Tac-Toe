import { Fragment, useState } from "react"
import Player from "./component/Player"
import GameBoard from "./component/GameBoard"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectedSqure() {
    setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
  }
  return (
    <Fragment>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectedSqure} activePlayerSymbol={activePlayer} />
      </div>
      LOG
    </Fragment>
  )
}

export default App
