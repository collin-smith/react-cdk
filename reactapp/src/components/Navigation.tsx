import {  BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom'
import {  useState } from 'react';

const Navigation2 = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  const burger = document.querySelector('#burger');
  const menu = document.querySelector('#menu');


if (burgerOpen) {menu?.classList.remove('hidden');}
if (!burgerOpen) {menu?.classList.add('hidden');}



  const [selectDropDownOpen, setSelectDropDownOpen] = useState(false);
  const location = useLocation();
  //console.log("current URL="+location.pathname+"=");


  const selectdd = document.querySelector('#selectOptions');
 // console.log("selectDropDownOpen="+selectDropDownOpen);
 if (selectDropDownOpen) {selectdd?.classList.remove('hidden');}
  if (!selectDropDownOpen) {selectdd?.classList.add('hidden');}
  

    return (
<div className="bg-primarybg text-primarytext">
<nav className="">
  <div className="container mx-auto px-4 md:flex items-center gap-6">
    {/* Logo  bg-sky-600 text-white*/}
    <div className="flex items-center justify-between md:w-auto w-full">
      <a href="#" className="py-5 px-2 flex-1 font-bold">BlogCentral.com</a>
      {/* mobile menu icon */}
      <div className="md:hidden flex items-center">
        <button type="button" className="mobile-menu-button" id="burger" onClick={()=>setBurgerOpen(!burgerOpen)}>
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </div>

    <div className="hidden md:flex md:flex-row flex-col items-center justify-start md:space-x-1 pb-3 md:pb-0 navigation-menu" id="menu">
      <a href="/" className="py-2 px-3 block ">Home</a>
      <a href="/addblog" className="py-2 px-3 block ">Add Blog</a>
      {/* Dropdown menu */}
      <div className="relative">
        <button type="button" className="dropdown-toggle py-2 px-3 hover:bg-primaryhover flex items-center gap-2 rounded" onClick={()=>setSelectDropDownOpen(!selectDropDownOpen)}>
          <span className="pointer-events-none select-none">Services</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>
        </button>
        <div className="dropdown-menu absolute hidden bg-secondarybg text-secondarytext rounded-b-lg pb-2 w-48" id="selectOptions">
          <a href="#" className="block px-6 py-2 hover:bg-primaryhover">Extra Link 1</a>
          <a href="#" className="block px-6 py-2 hover:bg-primaryhover">Extra Link 2</a>
          <a href="#" className="block px-6 py-2 hover:bg-primaryhover">Extra Link 3</a>
        </div>
      </div>
    </div>
  </div>
</nav>

</div>
    );
  }
   



  export default Navigation2;