import React from 'react'
import Board from '../../Components/Board'
import Card from '../../Components/Card'
import './Boards.css'

const Boards = () => {
  return(
    <>
      <main className="flexbox">
        Here will be our boards.
        <Board id="board1" className="board">
          <Card>
            <p id="card1" className="card" draggable="true">Card One</p>
          </Card>
        </Board>

        <Board id="board2" className="board">
          <Card>
            <p id="card2" className="card" draggable="true">Card Two</p>
          </Card>
        </Board>

      </main>
    </>
  )
}

export default Boards