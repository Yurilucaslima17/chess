export interface Tile {
  coordinates: string[];
  piece: PieceType;
}

export enum Direction {
  Up = "0 1",
  Down = "0 -1",
  Left = "-1 0",
  Right = "1 0",
  Diagonal1 = "-1 1",
  Diagonal2 = "1 1",
  Diagonal3 = "1 -1",
  Diagonal4 = "-1 -1",
  None = "0 0",
}

export enum PieceType {
  KingW = "KingW",
  QueenW = "QueenW",
  RookW = "RookW",
  BishopW = "BishopW",
  KnightW = "KnightW",
  PawnW = "PawnW",
  KingB = "KingB",
  QueenB = "QueenB",
  RookB = "RookB",
  BishopB = "BishopB",
  KnightB = "KnightB",
  PawnB = "PawnB",
  None = "None",
}

export interface IPiece {
  type: PieceType;
  // moveType: Direction[][];
  position: string[];
  changeTile: Function;
  tiles: Tile[];
}

export interface Property {
  type: PieceType;
  position: string[];
  changeTile: Function;
  tiles: Tile[];
}
