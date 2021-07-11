export function calculateWinner(squares){
    const lines=[
        [0,1,2],  //horizontal
        [3,4,5],
        [6,7,8],
        [0,3,6],  //vertical
        [1,4,7],
        [2,5,8],
        [0,4,8],  //diagonals
        [2,4,6],
    ];
    for (let i=0; i<lines.length; i++){
        const [a,b,c] =lines[i];   //iterates all the winning combinations array and holds values in a b c
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){   // if all values in winning combination array a b c is equal then works
            // return squares[a];  //returns X or O (to be used as winner)
            return {
                winner: squares[a],
                winningSquares: [a,b,c]
            }
        }
    }
    return {
        winner: null,
        winningSquares: [],
    }
}