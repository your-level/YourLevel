import '../scss/test.scss'
import React, { useState } from 'react'
import anime from 'animejs/lib/anime.es.js';
import { ReactSVG } from 'react-svg'
import logo from '../res/logo.svg'
//import place from '../res/place.svg'
import certificate from '../res/result.svg'
//import data from '../res/desc.json'
import data from '../res/desc for tests.json'
import downCertifi from '../res/certifi.pdf'


//moduls
//


function Test(page, getPage) {
  //=========================================================================================
  
  let [position, getPosition] = useState(-600)
  //let [text, setText] = useState('')

  const [resultAnswer, getReasultAswer] = useState('')
  let [checkedMus, checkCheckedMus] = useState([])
 //let checkedMus = []
  let trueQestion = []
  let content
  let [countNumber, setCountNumber] = useState(1)  
  //console.log(position//
  //=========================================================================================
  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      if(j){
        
      }
      else{
        var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      }
      

    }
    
  }
  
  //=========================================================================================
  let setPage = ()=>{
    shuffle(content)
    //document.querySelector('.back').style.display = 'none'
    getPosition(position = -600)
    //console.log(checkedMus)
    anime({
      targets:'.boxQuestion',
      translateX:0,
      //delay: 1000,
    })
    document.querySelector('header').style.display = 'grid'
    document.querySelector('main').style.display = 'grid'
    document.querySelector('footer').style.display = 'block'


    document.querySelector('.test').style.display = 'none'
    checkCheckedMus([])
    let mus = document.querySelectorAll('.checkIn')
    for(let i=0; i< mus.length; i++){
       mus[i].checked = false
    }

    let num = document.querySelectorAll('.num')
    for(let i=1; i< num.length; i++){
      num[i].style.background = 'none'
   }
   setCountNumber(countNumber = 1)
  }
  //=========================================================================================

   function leftblock(props){
    //document.querySelector('.boxQuestion')
    setCountNumber(countNumber+1)
    let num = document.querySelectorAll('.num')
    if(num.length === countNumber){

    }
    else{
      num[countNumber].style.background = '#adb5bd'
    }

    
    //console.log(countNumber)

    let mus = document.querySelectorAll('.checkIn')
    for(let i=0; i< mus.length; i++){
       mus[i].checked = false
    }


    if(props.target.innerHTML === 'Next'){
      getPosition(position-600)
      
    }
    else{
      getPosition(position+600)

    }
    anime({
      targets:'.boxQuestion',
      translateX:position,
      //delay: 1000,
    })
    //console.log(position)

     content.map(async item=>{
      item.answers.map(async answer=>{
        if(answer.flag){
          trueQestion.push(answer.flag)
        }
      })
     })
     let correct = checkedMus.filter((i)=>{ return i==='true'})
     if(correct.length === checkedMus.length & checkedMus.length === trueQestion.length){
      getReasultAswer('-=| Congratulations |=-')
      document.querySelector('.true').style.display = 'block'
     }
     else{
      getReasultAswer('You did not answer all the questions correctly. Please try again')
      document.querySelector('.true').style.display = 'none'

     }
     //console.log(checkedMus)
   }
  //=========================================================================================
   

   Object.keys(data).map(async(i, index)=>{
    //console.log(typeof(i))
    if(i === page.page){
      content = Object.values(data)[index]
    }
    else{
      
    }
    
   })
  //=========================================================================================

   
   function flag(props){
    if(props.target.checked){
      
      checkedMus.push(props.target.value)
      //console.log(checkedMus)
    }
    else{
      checkedMus.pop()
     // console.log(checkedMus)
    }
    
   }
  //=========================================================================================

   let box =  content.map((item, index)=>{
    
           return <div class='boxQuestion'>
            
                <div class='caption'>
                    <h1>{item.caption}</h1>
                </div>
                <div class='other'>
                    <h2>{item.Explanation}</h2>
                </div>
                <div class='answers'>
                  <ul>
                    {item.answers.map(i=>{
                      return <li><input class='checkIn' type="checkbox" onChange={flag} value={i.flag}/>{i.name}</li>
                    })}
                  </ul>
                  
                  
                  <button onClick={leftblock}>Next</button>
                  
                </div>
                
            </div>
        })
  //=========================================================================================
    
    // function setNewText(props){
      
      
    //   if(props.target.value.length >= 16){
    //     //console.log('no')
        
    //   }
    //   else if(props.target.value.length === 0){
    //     document.querySelector('.textName').innerHTML = 'Enter Your Name'        
    //   }
    //   else{
    //     document.querySelector('.textName').innerHTML = props.target.value
        
    //   }
    // }

   //=========================================================================================
   function save(){

   }
   //=========================================================================================

    let result = <div class='boxQuestion'>
                    <div class='result'>
                      <p class='resultAnswer'>{resultAnswer}</p>
                      <div  class='true'>
                          <p>
                            You answered all the questions correctly here is your certificate<br/>
                            Click on it and Download

                          </p>
                        
                          <a href={downCertifi} download='yourLevel.pdf'><ReactSVG class='certificate' onClick={save} src={certificate}/></a>
                        <div>
                          {/* <input placeholder='Enter Your name' onInput={setNewText} ></input> */}
                        </div>
                      </div>
                      
                    </div>
                    
                 </div>    

    let numbers = content.map((i, index)=>{
      return <h1 class='num'>{index+1}</h1>
    })
    //console.log(certificate)
    

    anime({
      targets:'.resultCertifi',
      translateY:-10,
      duration:1000,
      direction: 'alternate',
      loop: true,
      easing: 'linear',
      autoplay: true,
    })
  //=========================================================================================

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
        {/* <ReactSVG class='svg' src={place}/> */}
        <ReactSVG src={logo} class='svg'/>
      </footer>
    </div>
  );
}

export default Test;
