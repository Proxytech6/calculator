import React, { useState } from 'react'
import './Cal.css';


const CalculatorForm = () => {
  const logicOperators = ['*', '+','-', '/', '.'];

  let [screen, setScreen] = useState('');

   const updatescreen = (value) => {
    setScreen(screen + value);
    if (
      logicOperators.includes(value) && screen === '' ||
      logicOperators.includes(value) && logicOperators.includes(screen.slice(-1))
    )
    {
      
   return setScreen(screen.slice(-1));
    }
  }
     let theArray = [];
     for ( let i =1; i < 10; i++ ) {
      theArray.push(
        <button key={i}
         onClick={(e) => {
          updatescreen(i.toString()) ;
           e.preventDefault()
        }
        }
        > {i} </button>
      )
    }
  //calculation section
   const equalTo =  e => {
    e.preventDefault();
    if (screen == '') {
      return null
    }
    setScreen (eval(screen).toString());
   }

   // deleting section 
    const del = e => {
      e.preventDefault();
      if (screen == '' ) {
       return null;
      }
      else if  (screen.includes(logicOperators))
      {
        setScreen(screen.slice(-1))
      }
      else {
        let value = screen.slice(0,-1);
        setScreen(value);
        console.log(screen);
      }
    }

    // clear and reset section

    const clear = e => {
             e.preventDefault();
             setScreen(screen= '')
  }
  return (
    <div>
      <form>
        <div className='screen'> {screen || '0'}</div>
       <buttons className="buttons">
        
        <button className='digit reset-btn'
                    onClick={clear}
        >RESET</button>
        <button className='digit clr-btn'
        onClick={clear}
        >CL</button>
        <button className='digit del-btn'
        onClick={del}
        >DEL</button>

        {theArray} 

        <button className='digit'
           onClick={(e) => {
            e.preventDefault()
            updatescreen ('0')
          }
        }
        >0</button>
        <button className='digit'
            onClick={(e) => {
              e.preventDefault()
              updatescreen ('.')}
            }
        >.</button>
        <button className='digit'
            onClick={(e) => {
              e.preventDefault()
              updatescreen('/')}
            }
        >/</button>
        <button className='digit'
                    onClick={(e) => {
                      e.preventDefault()
                      updatescreen('*')}
                    }
        >*</button>
        <button className='digit'
        onClick={(e) => {
          e.preventDefault()
          updatescreen('+')}
        }
        >+</button>
        <button className='digit'
                    onClick={(e) => {
                      e.preventDefault()
                      updatescreen('-')}
                    }
        >-</button>
        <button className='digit equalTo-btn'
                      onClick={equalTo}>=</button>
       
      

       </buttons>
      </form>
    </div>
  )
}

export default CalculatorForm
