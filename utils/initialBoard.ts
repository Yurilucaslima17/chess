import { PieceType, Tile } from "./types";

const initialBoard = () => {
  const horizontalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"].sort(
    (a, b) => Number(b) - Number(a)
  );
  const venticalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const resp: Tile[] = [];
  for (let i = 0; i < horizontalAxis.length; i++) {
    for (let j = 0; j < venticalAxis.length; j++) {
      let piece: PieceType = PieceType.None;
      if (horizontalAxis[i] === "1") {
        switch (venticalAxis[j]) {
          case "a":
            piece = PieceType.RookW;
            break;
          case "b":
            piece = PieceType.KnightW;
            break;
          case "c":
            piece = PieceType.BishopW;
            break;
          case "d":
            piece = PieceType.QueenW;
            break;
          case "e":
            piece = PieceType.KingW;
            break;
          case "f":
            piece = PieceType.BishopW;
            break;
          case "g":
            piece = PieceType.KnightW;
            break;
          case "h":
            piece = PieceType.RookW;
            break;
        }
      } else if (horizontalAxis[i] === "2") {
        piece = PieceType.PawnW;
      } else if (horizontalAxis[i] === "7") {
        piece = PieceType.PawnB;
      } else if (horizontalAxis[i] === "8") {
        switch (venticalAxis[j]) {
          case "a":
            piece = PieceType.RookB;
            break;
          case "b":
            piece = PieceType.KnightB;
            break;
          case "c":
            piece = PieceType.BishopB;
            break;
          case "d":
            piece = PieceType.QueenB;
            break;
          case "e":
            piece = PieceType.KingB;
            break;
          case "f":
            piece = PieceType.BishopB;
            break;
          case "g":
            piece = PieceType.KnightB;
            break;
          case "h":
            piece = PieceType.RookB;
            break;
        }
      }

      resp.push({
        coordinates: [venticalAxis[j], horizontalAxis[i]],
        piece: piece,
      });
    }
  }

  return resp;
};

export default initialBoard;
