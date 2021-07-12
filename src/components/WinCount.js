import React,{useState,useEffect} from 'react'

const WinCount = ({winner}) => {
    const [xWin, setXWin] = useState(0);
    const [oWin, setOWin] = useState(0);

    useEffect(() => {
        if(winner==='X'){
            setXWin(prev => prev+1);
            console.log(winner);
        }
        if(winner==='O'){
            setOWin(prev => prev+1);
            console.log(winner);
        }
        return () => {
            console.log("restarting");
        }
    }, [winner]);

    return (
        <div className="win-wrapper">
          <h2 className="win-title">Wins</h2>
          <div className="wins">
            <h3 className="win">{`X: ${xWin}`}</h3>
            <span></span>
            <h3 className="win">{`O: ${oWin}`}</h3> 
          </div> 
        </div>
    )
}

export default WinCount
