import React from 'react';

//CSS File here
import '../components/CSS/Header.css';

//Images (Import images here)
import line3horizontal from '../images/line3horizontal.svg';

class Header extends React.Component {
    render() {
        return (
            //Edit your HTML Code here
            //If you need to edit CSS, go to src/index.css
            //If you need to edit JavaScript, go to src/index.js

            <header>
        
            <div className='logo'>
            <img src="https://yt3.ggpht.com/NFB9TV7mnQGxmZsTBt1x_5v0n84M7P6THXRtCy4XvRn7EtslzgakQuh4wqrYH6_r5LWGxnL4lsEfTQ=s640-c-fcrop64=1,00210000ffdeffff-nd-v1" alt="logo"></img>
            </div>

            
            <div class="dropdown">
                <button class="dropbtn"><img id='sus'src={line3horizontal} alt="menu" /></button>
                <div class="dropdown-content">
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">About us</a>
                    <a href="#">Contact</a>
                </div>
            </div>
            </header>

        );
    }
}

export default Header;