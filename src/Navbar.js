import logo from './assets/shared/logo.svg';
import hamburger from './assets/shared/icon-hamburger.svg';
import close from './assets/shared/icon-close.svg'
import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar({setModal, pages, setCurrPage}){
   

        const [nav, shownav] = React.useState(false)
         function handleClick (){
            shownav(prevState => !prevState)
            setModal(prevState=> !prevState)
        }

       let show = nav? 'flex' : '';

       if(nav){
        document.body.style.overflow = 'hidden'
      
       }

       else {
        document.body.style.overflow = ''
         
       }
       
      const styles = { color: 'white'}

            return(
                <div>
                    <nav>
                        <img className ="navlogo" src={logo} alt='logo' />
                         <div className='navlinks' 
                         style={{display: show}}>
                            <ul>
                                <li><Link
                                className={pages==='home'?'active': ''}
                                 onClick={()=>{
                                    setCurrPage('home')
                                    shownav(false)}} to ='/'>
                                    <b style={styles}>00</b> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to ='/destination'
                                    className={pages==='destination'?'active': ''}
                                 onClick={()=>{
                                    setCurrPage('destination')
                                    shownav(false)}}
                                >  
                                <b style={styles}>01</b>      Destination
                                    </Link>
                                </li>

                                <li>
                                    <Link  to='/crew'
                                    className={pages==='crew'?'active': ''}
                                 onClick={()=>{
                                    setCurrPage('crew')
                                    shownav(false)}}
                                >
                                    <b style={styles}>02</b>   Crew
                                    </Link>
                                </li>

                                <li>
                                    <Link  to ='/technology'
                                    className={pages==='technology'?'active': ''}
                                 onClick={()=>{
                                    setCurrPage('technology')
                                    shownav(false)}}
                                    >
                                    <b style={styles}>03</b>   Technology
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        { !nav && 
                             <button className='nav-btn' onClick={handleClick}>
                                <img src={hamburger} alt="hamburger-icon"/>
                                </button>
                        }
                        { nav && <div >
                             <button className='nav-btn' onClick={handleClick}>
                                <img src={close} alt="close-icon" />
                                </button>
                        </div>}
                        
                    </nav>
                </div>
            )
}