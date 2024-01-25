import { useState } from "react";
import "./ChessBoard.css";

function ChessBoard() {
  const tiles = [];
  let currentTileKey = 0;
  const [selectedTile, setSelectedTile] = useState(-1); // -1 means none is selected
  for (let i = 0; i < 4; i++) {

    for (let j = 0; j < 4; j++) {
        tiles.push(<div className='black' key={currentTileKey} onClick={() => setSelectedTile(temp)}></div>);
        currentTileKey++;
        tiles.push(<div className='white' key={currentTileKey} onClick={() => setSelectedTile(currentTileKey)}></div>);
        currentTileKey++;
    }

    for (let k = 0; k < 4; k++) {
        tiles.push(<div className='white' key={currentTileKey} onClick={() => setSelectedTile(currentTileKey)}></div>);
        currentTileKey++;
        tiles.push(<div className='black' key={currentTileKey} onClick={() => setSelectedTile(currentTileKey)}></div>);
        currentTileKey++;
    }

  }

  return (
    <>
      <div id="container">{tiles}</div>
      <button onClick={() => alert(selectedTile)}>hello</button>
    </>
  );
}

export default ChessBoard;
