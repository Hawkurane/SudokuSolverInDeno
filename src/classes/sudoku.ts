export class Sudoku {
    table: string[][] = [[],[],[],[],[],[],[],[],[]];

    constructor(arg: string){
        // We expect arg to be a string of 81 characters, with . or zeros as empty cells in the sudoku
        for(let j = 0; j < 9; j++) {
            for(let i = 0; i < 9; i++) {
                this.table[i][j] = arg.charAt(i + j * 9);
            }
        }
    }
}

export const defaultSudoku = (): Sudoku => {
    return new Sudoku("4.....8.5.3..........7......2.....6.....8.4......1.......6.3.7.5..2.....1.4......");
}