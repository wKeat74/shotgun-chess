import { useState } from "react";
import "./ChessBoard.css";

function ChessBoard() {
  const [selectedTile, setSelectedTile] = useState(''); // empty string means none selected


  return (
    <>
        <div className='board'>
          <div className='column'>
            <div className={(selectedTile == 'a8') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('a8')}></div>
            <div className={(selectedTile == 'a7') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('a7')}></div>
          
            <div className={(selectedTile == 'a6') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('a6')}></div>
            <div className={(selectedTile == 'a5') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('a5')}></div>

            <div className={(selectedTile == 'a4') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('a4')}></div>
            <div className={(selectedTile == 'a3') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('a3')}></div>

            <div className={(selectedTile == 'a2') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('a2')}></div>
            <div className={(selectedTile == 'a1') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('a1')}></div>
          </div>
          <div className='column'>
            <div className={(selectedTile == 'b8') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('b8')}></div>
            <div className={(selectedTile == 'b7') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('b7')}></div>
          
            <div className={(selectedTile == 'b6') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('b6')}></div>
            <div className={(selectedTile == 'b5') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('b5')}></div>

            <div className={(selectedTile == 'b4') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('b4')}></div>
            <div className={(selectedTile == 'b3') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('b3')}></div>

            <div className={(selectedTile == 'b2') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('b2')}></div>
            <div className={(selectedTile == 'b1') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('b1')}></div>
          </div>
          <div className='column'>
            <div className={(selectedTile == 'c8') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('c8')}></div>
            <div className={(selectedTile == 'c7') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('c7')}></div>
          
            <div className={(selectedTile == 'c6') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('c6')}></div>
            <div className={(selectedTile == 'c5') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('c5')}></div>

            <div className={(selectedTile == 'c4') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('c4')}></div>
            <div className={(selectedTile == 'c3') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('c3')}></div>

            <div className={(selectedTile == 'c2') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('c2')}></div>
            <div className={(selectedTile == 'c1') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('c1')}></div>
          </div>
          <div className='column'>
            <div className={(selectedTile == 'd8') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('d8')}></div>
            <div className={(selectedTile == 'd7') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('d7')}></div>
          
            <div className={(selectedTile == 'd6') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('d6')}></div>
            <div className={(selectedTile == 'd5') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('d5')}></div>

            <div className={(selectedTile == 'd4') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('d4')}></div>
            <div className={(selectedTile == 'd3') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('d3')}></div>

            <div className={(selectedTile == 'd2') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('d2')}></div>
            <div className={(selectedTile == 'd1') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('d1')}></div>
          </div>
          <div className='column'>
            <div className={(selectedTile == 'e8') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('e8')}></div>
            <div className={(selectedTile == 'e7') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('e7')}></div>
          
            <div className={(selectedTile == 'e6') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('e6')}></div>
            <div className={(selectedTile == 'e5') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('e5')}></div>

            <div className={(selectedTile == 'e4') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('e4')}></div>
            <div className={(selectedTile == 'e3') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('e3')}></div>

            <div className={(selectedTile == 'e2') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('e2')}></div>
            <div className={(selectedTile == 'e1') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('e1')}></div>
          </div>
          <div className='column'>
            <div className={(selectedTile == 'f8') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('f8')}></div>
            <div className={(selectedTile == 'f7') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('f7')}></div>
          
            <div className={(selectedTile == 'f6') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('f6')}></div>
            <div className={(selectedTile == 'f5') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('f5')}></div>

            <div className={(selectedTile == 'f4') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('f4')}></div>
            <div className={(selectedTile == 'f3') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('f3')}></div>

            <div className={(selectedTile == 'f2') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('f2')}></div>
            <div className={(selectedTile == 'f1') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('f1')}></div>
          </div>
          <div className='column'>
            <div className={(selectedTile == 'g8') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('g8')}></div>
            <div className={(selectedTile == 'g7') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('g7')}></div>
          
            <div className={(selectedTile == 'g6') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('g6')}></div>
            <div className={(selectedTile == 'g5') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('g5')}></div>

            <div className={(selectedTile == 'g4') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('g4')}></div>
            <div className={(selectedTile == 'g3') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('g3')}></div>

            <div className={(selectedTile == 'g2') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('g2')}></div>
            <div className={(selectedTile == 'g1') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('g1')}></div>
          </div>
          <div className='column'>
            <div className={(selectedTile == 'h8') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('h8')}></div>
            <div className={(selectedTile == 'h7') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('h7')}></div>
          
            <div className={(selectedTile == 'h6') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('h6')}></div>
            <div className={(selectedTile == 'h5') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('h5')}></div>

            <div className={(selectedTile == 'h4') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('h4')}></div>
            <div className={(selectedTile == 'h3') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('h3')}></div>

            <div className={(selectedTile == 'h2') ? 'tile white selected-blue' : 'tile white'} onClick={() => setSelectedTile('h2')}></div>
            <div className={(selectedTile == 'h1') ? 'tile black selected-red' : 'tile black'} onClick={() => setSelectedTile('h1')}></div>
          </div>
        </div>
    </>
  );
} 

export default ChessBoard;
