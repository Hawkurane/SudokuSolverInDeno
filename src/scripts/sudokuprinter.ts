import { Sudoku, defaultSudoku } from "../classes/sudoku.ts";

// This function should display a sudoku in the following format:
/**
 *      4 . . |. . . |8 . 5       *
 *      . 3 . |. . . |. . .       *
 *      . . . |7 . . |. . .       *
 *      ------+------+------      *
 *      . 2 . |. . . |. 6 .       *
 *      . . . |. 8 . |4 . .       * 
 *      . . . |. 1 . |. . .       * 
 *      ------+------+------      *
 *      . . . |6 . 3 |. 7 .       * 
 *      5 . . |2 . . |. . .       * 
 *      1 . 4 |. . . |. . .       * 
 */
export const printSudoku = (sudokuTable: Sudoku = defaultSudoku()): void => {
  // TODO
  console.log("4 . . |. . . |8 . 5 ");
  console.log(". 3 . |. . . |. . . ");
  console.log(". . . |7 . . |. . . ");
  console.log("------+------+------");
  console.log(". 2 . |. . . |. 6 . ");
  console.log(". . . |. 8 . |4 . . ");
  console.log(". . . |. 1 . |. . . ");
  console.log("------+------+------");
  console.log(". . . |6 . 3 |. 7 . ");
  console.log("5 . . |2 . . |. . . ");
  console.log("1 . 4 |. . . |. . . ");
};
