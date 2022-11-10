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
          <div className={"flexcontainer"}>
          
            <h1 id="title"> AT Mobile </h1> 
            <h2 id="subtitle">All New, All Redesigned</h2> 
            
            <img className='appstore' src='https://i.postimg.cc/kMR9Mr93/Download-on-the-App-Store-Badge-US-UK-blk-092917.png' alt="download on the app store" width={300} height={100}></img> 
           
            <img className='appscreenshot' src='https://i.postimg.cc/P5xVfLF5/Untitled-1.png' alt="screenshot of the app" ></img>
          </div>
        </main>

    );
  }
}

export default Home;