import React from 'react'

const StatusMessage = ({winner, current}) => {

    const noMovesLeft = current.board.every((el)=> el!==null);
    return (
        <div className="status-message">
            {winner && ( <>
                Winner is <span className={winner === 'X' ? 'text-green':'text-orange'}>{winner}</span>
            </>
            )}
            {!winner && !noMovesLeft &&
            <>
             Next player is <span className={current.isXNext ? 'text-green':'text-orange'}> {current.isXNext ? 'X' : 'O'}</span> 
            </>}
            {!winner && noMovesLeft && <> <span className="text-orange">It's a Draw :(</span></>}
        </div>
    )
}

export default StatusMessage
