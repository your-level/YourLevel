import '../scss/test.scss'
import React, { useState } from 'react'
import anime from 'animejs/lib/anime.es.js';
import { ReactSVG } from 'react-svg'
import logo from '../res/logo.svg'
import place from '../res/place.svg'
//import data from '../res/desc.json'
import data from '../res/desc for tests.json'
//moduls

//


function Test() {
    
  const [position, getPosition] = useState(-600)

   function leftblock(){
    //document.querySelector('.boxQuestion')
   
    getPosition(position-600) 
    console.log(position)
     anime({
       targets:'.boxQuestion',
       translateX:position,
       //delay: 1000,
     })
   }

   let box =  data.Excel.map((item, index)=>{
        //console.log(item)
           return <div key={index} class='boxQuestion'>
            
                <div class='caption'>
                    <h1>{item.caption}</h1>
                </div>
                <div class='other'>
                    <h2>{item.Explanation}</h2>
                </div>
                <div class='answers'>
                  <ul>
                    {item.answers.map(i=>{
                      return <li><input type="checkbox" name="list"/>{i.name}</li>
                    })}
                  </ul>

                </div>
                <button onClick={leftblock}>Next</button>
            </div>
        })

    let result = <div class='boxQuestion'>
                    

                 </div>    
    

  return (
    <div class='test'>
      <header>

      </header>
      <main>
        <div class='box'>
          {box}
          {result} 
        </div>
        
        
        
      </main>
      <footer>
        <ReactSVG class='svg' src={place}/>
        <ReactSVG src={logo}/>
      </footer>
    </div>
  );
}

export default Test;
