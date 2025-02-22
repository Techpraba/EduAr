
import React from 'react';
import Link from 'next/link';
import './Navbar.css';

 function Home() {
    return (
      <>
            <div className='NavbarOverall'>
                <div className='navlink'>
                    <Link href="/">Home</Link>        
                    <Link href="/">About</Link>        
                    <Link href="/">Featurs</Link>        
                    <Link href="/">Store</Link>   
                    <Link href="/">Blog</Link> 
                </div>  
               
                <h1 className='headline'>EDUAR</h1>
                <div className='leftSideNavbar'>
                    <input type="text" />
                    <h1>icon</h1>
                    <button>Signup</button>

                </div>
              
              
             
        </div>
      </>
    );
  }
export default Home;