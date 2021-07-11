import React,{useState} from 'react'

const WinCount = ({winner}) => {
    const [xWin, setXWin] = useState(0);
    const [oWin, setOWin] = useState(0);

    const increment=(()=>{
        console.log("clicked");
        setXWin(prev => prev+1);
        setOWin(prev => prev+1);
    })
     if(winner==='X'){
        console.log("Xwin"); 
        console.log(`Winner is ${winner}`);
     }
     if(winner==='O'){
        console.log("Owin");  
     }
    //  else{
    //      setOWin(prev=>{
    //          prev= prev;
    //      }); 
    //      setXWin(prev=>{
    //          prev= prev;
    //      });
    //  }

    return (
        <div>
          <h2>Wins</h2>
          <button type="button" onClick={increment}>Click</button>
          <p>{`X: ${xWin}`}</p>
          <p>{`O: ${oWin}`}</p>  
        </div>
    )
}

export default WinCount
