import React, {  useState } from 'react'
import NavBar from '../Components/NavBar';

const InterfacePage = () => {

  const [result , setResult] = useState('');
  const [computerChoice , setComputerChoice] = useState('');
  const [userChoices , setUserChoices] = useState('');

  const choiceMap ={
    1 : "Stone",
    2 : "Paper",
    3 : "Scissor"
  }
  const handleClick= (e)=>{
    console.log(e.target.value);
    const userChoice = Number(e.target.value);
    setUserChoices(userChoice);
    const comp =  Math.floor( Math.random() * 3 ) +1;

      
    const findWinner =  (userChoice,computerChoice) =>{
      if( userChoice == computerChoice ) return "DRAW"
    
    if( userChoice == 1 && computerChoice == 3 || userChoice == 3 && computerChoice == 2 || userChoice == 2 && computerChoice == 1)
    return "You win"
    
    return "Computer Wins"
    }
    // console.log(result);
    
    setComputerChoice(choiceMap[comp])
    setResult(findWinner(userChoice,comp))

    console.log(result);
    
  }
  return (
    <div className=''>
      <div className='h-screen flex flex-col justify-center items-center gap-10'>
           <div className='flex gap-3'>
           <button value={1} className='bg-black text-white font-bold h-10 w-20 rounded-3xl border-2 '  onClick={(e)=>handleClick(e)}>Stone</button>
             <button value={2} className='bg-black text-white font-bold h-10 w-20 rounded-3xl border-2 ' onClick={(e)=>handleClick(e)}>Paper</button>
             <button value={3} className='bg-black text-white font-bold h-10 w-20 rounded-3xl border-2 ' onClick={(e)=>handleClick(e)}>Scissor</button>
        
           </div>
             {result && 
        (<div className='text-center mt-2 text-xl '>
          <div>You Choose: {choiceMap[userChoices]}</div>
          <p>Computer choose : {computerChoice}</p>
          <p className='font-bold text-green-600'>{result}</p>
      </div>)
        }
        </div>
        
    </div>
  )
}

export default InterfacePage