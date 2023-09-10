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


function Test(page, getPage) {
    
  const [position, getPosition] = useState(-600)
  const [resultAnswer, getReasultAswer] = useState('')
  const [checkedMus, getCheckedMus] = useState([])
 //let checkedMus = []
  let trueQestion = []
  let content

  let setPage = ()=>{
    document.querySelector('header').style.display = 'grid'
    document.querySelector('main').style.display = 'grid'
    document.querySelector('footer').style.display = 'block'


    document.querySelector('.test').style.display = 'none'
    
  }

   function leftblock(){
    //document.querySelector('.boxQuestion')
   
    getPosition(position-600) 
    //console.log(position)
     anime({
       targets:'.boxQuestion',
       translateX:position,
       //delay: 1000,
     })

     content.map(item=>{
      item.answers.map(answer=>{
        if(answer.flag){
          trueQestion.push(answer.flag)
        }
      })
     })
     let correct = checkedMus.filter((i)=>{ return i==='true'})
     if(correct.length === checkedMus.length & checkedMus.length === trueQestion.length){
      getReasultAswer('da')
     }
     else{
      getReasultAswer('net')
     }
     //console.log(checkedMus)
   }
   

   Object.keys(data).map((i, index)=>{
    //console.log(typeof(i))
    if(i === page.page){
      content = Object.values(data)[index]
    }
    else{
      
    }
    
   })

   
   function flag(props){
    if(props.target.checked){
      
      checkedMus.push(props.target.value)
      //console.log(checkedMus)
    }
    else{
      checkedMus.pop()
      //console.log(checkedMus)
    }
    
   }

   let box =  content.map((item, index)=>{
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
                      return <li><input type="checkbox" onChange={flag} value={i.flag}/>{i.name}</li>
                    })}
                  </ul>

                </div>
                <button onClick={leftblock}>Next</button>
            </div>
        })

    let result = <div class='boxQuestion'>
                    {resultAnswer}

                 </div>    

    let numbers = content.map((item,index)=>{
      return <h2>{index + 1}</h2>
    })
    

  return (
    <div class='test'>
      <header>
        <button cluss='backButton' onClick={setPage}>Back</button>

        {numbers}
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
