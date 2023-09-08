import './scss/app.scss'
import React, { useState } from 'react'

//moduls
import Header from './moduls/Header'
import Footer from './moduls/footer'
import Main from './moduls/main'
import Test from './moduls/Test'
//


function App() {
  const [page, getPage] = useState(0)


  return (
    <div class='app'>
      <div class='box'>
        <header>
          <Header/>
        </header>
        <main>
          <Main/>
        </main>
        <footer>
          <Footer page={page} getPage={getPage}/>
        </footer>


        <Test/>
      </div>
      
    </div>
  );
}

export default App;
