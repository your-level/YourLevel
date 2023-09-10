import './scss/app.scss'
import React, { useState } from 'react'
import data from './res/desc for tests.json'

//moduls
import Header from './moduls/Header'
import Footer from './moduls/footer'
import Main from './moduls/main'
import Test from './moduls/Test'
//


function App() {
  
  const [page, getPage] = useState(Object.keys(data)[0])
  
  
  
  return (
    <div class='app'>
      <div class='box'>
        <header>
          <Header/>
        </header>
        <main>
          <Main page={page}  getPage={getPage} />
        </main>
        <footer>
          <Footer page={page} getPage={getPage}/>
        </footer>


        <Test page={page} getPage={getPage}/>
      </div>
      
    </div>
  );
}

export default App;
