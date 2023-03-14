import React, { useRef, useState } from "react";
import Piece from "./Piece";
import styles from "../styles/table.module.scss";
import styles2 from "../styles/pieces.module.scss";
import initialBoard from "../../utils/initialBoard";
import { PieceType, Tile } from "../../utils/types";

const initial: Tile[] = initialBoard();

const Table = () => {
  const [tiles, setTiles] = useState<Array<Tile>>(initial);
  const [selected, setSelected] = useState<HTMLDivElement>();
  const [selectedPieceType, setSelectedPieceType] = useState<PieceType>();
  const chessBoardRef = useRef<HTMLDivElement>(null);

  const findPieceType = (str: string | undefined) => {
    if (str === undefined) return PieceType.None;
    return PieceType[Object.values(PieceType).find((p) => p === str) || "None"];
  };

  const selectPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.classList.contains(`${styles2.piece}`)) {
      target.style.position = "absolute";
      target.style.left = `${e.clientX - 50}px`;
      target.style.top = `${e.clientY - 50}px`;
      setSelected(target);
      setSelectedPieceType(
        findPieceType(target.attributes.getNamedItem("alt")?.value)
      );
    }
  };

  const movePiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const chessBoard = chessBoardRef.current;
    if (selected && chessBoard) {
      const minX = chessBoard.offsetLeft - 25;
      const minY = chessBoard.offsetTop - 10;
      const maxX = chessBoard.offsetLeft + chessBoard.clientWidth - 75;
      const maxY = chessBoard.offsetTop + chessBoard.clientHeight - 100;
      const x = e.clientX - 50;
      const y = e.clientY - 50;

      selected.style.position = "absolute";
      selected.style.left =
        x < minX ? `${minX}px` : x > maxX ? `${maxX}px` : `${x}px`;
      selected.style.top =
        y < minY ? `${minY}px` : y > maxY ? `${maxY}` : `${y}px`;
    }
  };

  const finishMovement = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const chessBoard = chessBoardRef.current;
    if (selected && chessBoard && selectedPieceType) {
      const x = Math.floor((e.clientX - chessBoard.offsetLeft) / 100);
      const y =
        Math.abs(Math.ceil((e.clientY - chessBoard.offsetTop - 800) / 100)) + 1;
      const convertedX = String.fromCharCode("a".charCodeAt(0) + x);
      setTiles((value) => {
        const pieces = value.map((p) => {
          if (
            selected.attributes
              .getNamedItem("aria-details")
              ?.value.includes(p.coordinates[0] + " " + p.coordinates[1])
          ) {
            p.piece = PieceType.None;
          }
          if (
            p.coordinates[0] === convertedX &&
            p.coordinates[1] === y.toString()
          ) {
            p.piece = selectedPieceType || PieceType.None;
          }
          return p;
        });
        return pieces;
      });
      selected.style.position = "absolute";
      selected.style.left = `${e.clientX - 50}px`;
      selected.style.top = `${e.clientY - 50}px`;
      setSelected(undefined);
      setSelectedPieceType(undefined);
    }
  };

  return (
    <div>
      <button onClick={() => setTiles(initial)}>Reset Table</button>
      <div ref={chessBoardRef} className={styles.table}>
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
            <Piece
              tiles={tiles}
              type={tile.piece}
              position={tile.coordinates}
              changeTile={setTiles}
              onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                selectPiece(e)
              }
              onMouseMove={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                movePiece(e)
              }
              onMouseUp={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                finishMovement(e)
              }
            ></Piece>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
