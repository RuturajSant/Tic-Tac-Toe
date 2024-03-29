import React from 'react'

const History = ({ history, moveTo, currentMove,notLastMove}) => {
    return (
        <div className="history-wrapper">
        <ul className="history">
        {
            history.map((_, move)=>{
              return (
                  <li key={move}>
                        <button
                         className={`btn-move ${move === currentMove ? 'active':''}`}
                         onClick={()=>{
                            moveTo(move);
                        }} type="button">{move === 0 ? 'Lets Play!!' : `Go to move #${move}`}</button>
                     </li>   
                     );
            })}
        </ul>
        </div>
    );
};

export default History
