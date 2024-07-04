import { Fragment } from "react"
import Player from "./component/Player"
import GameBoard from "./component/GameBoard"

function App() {
  return (
    <Fragment>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      LOG
    </Fragment>
  )
}

export default App
