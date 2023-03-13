import React from "react";
import Piece from "./Piece";
import { IPiece } from "../../utils/types";

const PieceComponent = (prop: IPiece) => {
  return (
    <Piece
      type={prop.type}
      position={prop.position}
      changeTile={prop.changeTile}
    ></Piece>
  );
};

export default PieceComponent;
