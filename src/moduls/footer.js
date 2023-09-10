import '../scss/footer.scss'
import React, { useEffect } from 'react'
import data from '../res/desc for tests.json'

function Footer(page, getPage) {

  function getNavPage(props){

    page.getPage(props.target.innerHTML)
    //console.log(page.page)
    let mus = document.querySelectorAll('.navLi')
    for(let i=0; i< mus.length;i++){
      mus[i].style.background = 'none'
      mus[i].style.color = '#eee'
    }
    props.target.style.background = 'linear-gradient(180deg, rgba(174,171,171,1) 90%, rgba(182,182,182,0.3) 0%)'
    props.target.style.color = 'black'
  }

  let nav = Object.keys(data).map((item, index)=>{
    
    return <li class='navLi' onClick={getNavPage} data={index}>{item}</li>
  }) 

  

  return (
    <div class='footer'>
      <hr/>
      
        <nav class='nav'> 
          
            {nav}

        </nav>
      
    </div>
  );
}

export default Footer;
