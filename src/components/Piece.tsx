import React from "react";
import Image, { StaticImageData } from "next/image";
import kingB from "../../assets/KingB.png";
import kingW from "../../assets/KingW.png";
import pawnB from "../../assets/PawnB.png";
import pawnW from "../../assets/PawnW.png";
import queenB from "../../assets/QueenB.png";
import queenW from "../../assets/QueenW.png";
import knightB from "../../assets/KnightB.png";
import knightW from "../../assets/KnightW.png";
import bishopW from "../../assets/BishopW.png";
import bishopB from "../../assets/BishopB.png";
import rookB from "../../assets/RookB.png";
import rookW from "../../assets/RookW.png";

import styles from "../styles/pieces.module.scss";
import { Property } from "../../utils/types";

const images: { [key: string]: StaticImageData | string } = {
  KingB: kingB,
  KingW: kingW,
  PawnB: pawnB,
  PawnW: pawnW,
  QueenB: queenB,
  QueenW: queenW,
  KnightB: knightB,
  KnightW: knightW,
  BishopW: bishopW,
  BishopB: bishopB,
  RookB: rookB,
  RookW: rookW,
  None: "",
};

const Piece = (prop: Property) => {
  const src = images[prop.type];
  return (
    <div
      className={styles.container}
      onMouseDown={(e) => prop.onMouseDown(e)}
      onMouseMove={(e) => prop.onMouseMove(e)}
      onMouseUp={(e) => prop.onMouseUp(e)}
    >
      {src && (
        <Image
          width={100}
          height={100}
          className={styles.piece}
          src={src}
          alt={prop.type}
          onDragStart={(e) => e.preventDefault()}
          aria-details={prop.position.join(' ')}
        />
      )}
    </div>
  );
};

export default Piece;
