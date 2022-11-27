import React from 'react';

class Home extends React.Component {
  render() {
    return (
        //edit HTML code here
        //If you need to edit CSS, go to src/App.css
        //If you need to edit JavaScript, go to src/App.js
        //Happy Coding!

        <main>
          <title>AT APP</title>
          <div className='flexcontainer'>
            
            <div className='textcont'>
            
              <h1 className='title'> AT Mobile </h1> 
              <h2 className='subtitle'> no more card bozo </h2> 
            
              <img className='appstore' src='https://i.postimg.cc/kMR9Mr93/Download-on-the-App-Store-Badge-US-UK-blk-092917.png' alt="download on the app store" width={300} height={100}></img> 
            
            </div>
            <div className='appcont'>
              <img className='appscreenshot' src='https://i.postimg.cc/P5xVfLF5/Untitled-1.png' alt="screenshot of the app" ></img>
            </div>
          </div>
                   
          <div className='whiteband'>
           <div className='walletcont'>
            <h2 id='wallet'> Wallet Support </h2>
            <h2 id='tag'> Tag on and off with your phone </h2>
            <h2 id='learn'> Learn More </h2>
            <img className='walletimg' src='https://i.postimg.cc/TwyqT6Q7/w.png' alt="screenshot of the wallet" ></img>
           </div>
          </div>

          <div className='lowercontent'>
          
          </div>
        </main>

    );
  }
}

export default Home;