import { Direction } from "../../utils/types";

const PawnBMovement = {
  directions: Direction.Down,
  killDirection: [Direction.Diagonal3, Direction.Diagonal4],
  unlimitedMovement: false,
  specialTriggers: { upgrade: 1 },
};
const PawnWMovement = {
  directions: Direction.Up,
  killDirection: [Direction.Diagonal1, Direction.Diagonal2],
  unlimitedMovement: false,
  specialTriggers: { upgrade: 8 },
};
const Rook = {
  directions: [Direction.Up, Direction.Down, Direction.Right, Direction.Left],
  killDirection: [
    Direction.Up,
    Direction.Down,
    Direction.Right,
    Direction.Left,
  ],
  unlimitedMovement: true,
  specialTriggers: { moved: false },
};
const Bishop = {
  directions: [
    Direction.Diagonal1,
    Direction.Diagonal2,
    Direction.Diagonal3,
    Direction.Diagonal4,
  ],
  killDirection: [
    Direction.Diagonal1,
    Direction.Diagonal2,
    Direction.Diagonal3,
    Direction.Diagonal4,
  ],
  unlimitedMovement: true,
  specialTriggers: { moved: false },
};
const Knight = {
  directions: [
    Direction.Diagonal1,
    Direction.Diagonal2,
    Direction.Diagonal3,
    Direction.Diagonal4,
    Direction.Up,
    Direction.Down,
    Direction.Right,
    Direction.Left,
  ],
  killDirection: [
    Direction.Diagonal1,
    Direction.Diagonal2,
    Direction.Diagonal3,
    Direction.Diagonal4,
    Direction.Up,
    Direction.Down,
    Direction.Right,
    Direction.Left,
  ],
  unlimitedMovement: false,
  specialTriggers: { ignoreObstacles: true },
};
const Queen = {
  directions: [
    Direction.Diagonal1,
    Direction.Diagonal2,
    Direction.Diagonal3,
    Direction.Diagonal4,
    Direction.Up,
    Direction.Down,
    Direction.Right,
    Direction.Left,
  ],
  killDirection: [
    Direction.Diagonal1,
    Direction.Diagonal2,
    Direction.Diagonal3,
    Direction.Diagonal4,
    Direction.Up,
    Direction.Down,
    Direction.Right,
    Direction.Left,
  ],
  unlimitedMovement: true,
};
const King = {
  directions: [
    Direction.Diagonal1,
    Direction.Diagonal2,
    Direction.Diagonal3,
    Direction.Diagonal4,
    Direction.Up,
    Direction.Down,
    Direction.Right,
    Direction.Left,
  ],
  killDirection: [
    Direction.Diagonal1,
    Direction.Diagonal2,
    Direction.Diagonal3,
    Direction.Diagonal4,
    Direction.Up,
    Direction.Down,
    Direction.Right,
    Direction.Left,
  ],
  unlimitedMovement: false,
  specialTriggers: { moved: false },
};
