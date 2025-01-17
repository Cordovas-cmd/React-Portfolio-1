import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ currentPage, handlePageChange }) {
   return (
      <nav className="navbar navbar-expand-lg bg-dark">
         <div className="container-fluid">
            <h1 className='text-light flex-grow-1 row name'>Eric Spencer</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                  <li className='nav-item'>
                     <Link 
                        to='/React-Portfolio-1/'
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-active nav-link' : 'nav-link'}
                     >
                        Home
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link 
                        to='/React-Portfolio-1/about'
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-active nav-link' : 'nav-link'}
                     >
                        About Me
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link 
                        to='/React-Portfolio-1/contact'
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-active nav-link' : 'nav-link'}
                     >
                        Contact
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link 
                        to='/React-Portfolio-1/resume'
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-active nav-link' : 'nav-link'}
                     >
                        Resume
                     </Link>
                  </li>                  
               </ul>
            </div>
         </div>
      </nav >
   )
}

