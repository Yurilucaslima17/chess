import React, { useState } from "react";
import PieceComponent from "./PieceRender";
import styles from "../styles/table.module.scss";
import initialBoard from "../../utils/initialBoard";
import { Tile } from "../../utils/types";

// import { Container } from './styles';

const Table = () => {
  const initial: Tile[] = initialBoard();

  // const [tiles, setTiles] = useState<Array<Array<pieces>>>()
  const [tiles, setTiles] = useState<Array<Tile>>(initial);

  return (
    <div className={styles.table}>
      {tiles.map((tile: Tile, index: number) => (
        <div
          key={tile.coordinates.join(" ")}
          id={tile.coordinates.join(" ")}
          aria-details={tile.piece}
          className={
            styles.tile +
            " " +
            ((index + Math.floor(index / 8)) % 2 === 0
              ? styles.lightBrown
              : styles.heavyBrown)
          }
        >
          <PieceComponent
            tiles={tiles}
            type={tile.piece}
            position={tile.coordinates}
            changeTile={setTiles}
          ></PieceComponent>
        </div>
      ))}
    </div>
  );
};

export default Table;
