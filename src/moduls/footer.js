import '../scss/footer.scss'
import React from 'react'
import data from '../res/desc for tests.json'

function Footer(page, getPage) {

  // function getNavPage(item, page, getPage){

  //  console.log(item.innerHTML)
  // }
  function getNavPage(props){
    console.log(props.target.innerHTML)
  }

  let nav = data.names.map((item, index)=>{
    
    return <li class='navLi' onClick={getNavPage}>{item}</li>
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
