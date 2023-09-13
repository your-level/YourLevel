import '../scss/main.scss'
import React from 'react'
import { ReactSVG } from 'react-svg';
import anime from 'animejs';
import main from '../res/main.svg'
import time from '../res/time.svg'
import time2 from '../res/time2.svg'
import check from '../res/check.svg'
import book from '../res/book.svg'
import data from '../res/desc for tests.json'




function Main(page, getPage) {
  let setPage = ()=>{
    document.querySelector('header').style.display = 'none'
    document.querySelector('main').style.display = 'none'
    document.querySelector('footer').style.display = 'none'


    document.querySelector('.test').style.display = 'block'
    
  }
  //если обьект кей равен page то выводит values[]
  //console.log(data.$[page.page])
  //=========================================================================================
   
  let content
  Object.keys(data).map(async(i, index)=>{
    //console.log(typeof(i))
    if(i === page.page){
      content = Object.values(data)[index]
    }
    else{
      
    }
    
   })
  //=========================================================================================
  anime({
    targets:'.certrifSVG',
    translateY:-10,
    duration:1000,
    direction: 'alternate',
    loop: true,
    easing: 'linear',
    autoplay: true,
  })
  

  
  //=========================================================================================

  
  
  return (
    <div class='main'>
        <div class='left'>
            <h1>{page.page}</h1>
            <div class='text'>
              <p>{content[0].name}</p>
            </div>
            <div class='blocks'>
                <ReactSVG class='svg' src={time}/><li>Free test</li>
                <ReactSVG class='svg' src={book}/><li>Reliable information</li>
                <ReactSVG class='svg' src={time2}/><li>15 min</li>
                <ReactSVG class='svg' src={check}/><li>Certificate after training</li>
                <button class='click' onClick={setPage}>Start</button>
            </div>
        </div>
        <div class='right'>
            <ReactSVG class='svg' viewBox='0 0 100 100' src={main}/>
        </div>
    </div>
  );
}

export default Main;