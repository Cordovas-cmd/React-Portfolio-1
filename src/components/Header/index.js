import React, { useState } from 'react';
import Nav from '../Nav'




export default function Header() {
   const [currentPage, setCurrentPage] = useState('Home');

   const handlePageChange = (page) => setCurrentPage(page);
   console.log(Header)
   return (
      <>
         <Nav currentPage={currentPage} handlePageChange={handlePageChange} />         
      </>
   )
}