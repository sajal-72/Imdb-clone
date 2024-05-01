import { useState, useEffect, useRef} from "react";
import "./navbar.css";
import Menuitem from "./Menuitem";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [open1,setOpen1]=useState(null);

  const handleClick =(e)=>{
    setOpen1(e.currentTarget);
  }
  const handleClose =()=>{
    setOpen1(false);
  }

const [open,setOpen]= useState(false);

let menuRef=useRef();

useEffect(()=>{
  let handler =(e)=>{
    if(!menuRef.current.contains(e.target)){
      setOpen(false)
    }
  
  }
  document.addEventListener("mousedown",handler);

  return ()=>{
    document.removeEventListener("mousedown",handler);
  }
})


  return (
    <div className='nav'>
    <div className="left">
  <Link to="/" style={{textDecoration:'none'}}> <button className="button">
  <span>IMDb</span>
</button></Link> 

<button class="btn" onClick={handleClick}>
<label class="toggle" for="checkbox">
        <div id="bar1" class="bars"></div>
        <div id="bar2" class="bars"></div>
        <div id="bar3" class="bars"></div>
    </label>
    <span class="text">Menu</span>
</button>
<Menuitem open={open1} handleClose={handleClose}/>


    <form class="form">
      <button>
          <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="search">
              <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
      </button>
      <input class="input" placeholder="Search IMDb" required="" type="text"/>
      <button class="reset" type="reset">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
      </button>
  </form> 

  <button class="btn11">
  <span class="text">IMDb</span><span class="text1">Pro</span>
</button>
   

   
<button class="btn1">
<i class="fa-solid fa-bookmark"></i>
  <span class="text">Watchlist</span>
</button>

<Link to="/signup" style={{textDecoration:'none'}}> <button class="btn3">
  <span class="text">Sign In</span>
</button></Link>

<button class="btn2" ref={menuRef} onClick={()=>{setOpen(!open)}}>
  <span class="text">En<i class="fa-solid fa-caret-down"></i></span>
  <div className={`dropdown ${open? 'active' : 'inactive'}`}>
   <ul>
    <DropDownItem text={"English (United States)"}/>
    <hr />
    <DropDownItem text={"Italiano (Italy)"}/>
    <hr />
    <DropDownItem text={"हिन्दी (भारत)"}/>
    <hr />
    <DropDownItem text={"Español (España)"}/>
    <hr />
    <DropDownItem text={"Français (France)"}/>
    <hr />
    <DropDownItem text={"Deutsch (Deutschland)"}/>
    <hr />
    <DropDownItem text={"русский (россия)"}/>
   </ul>
  </div>
</button>

    </div>
    </div>
  );
}

function DropDownItem (props) {
  return(
    <li className="drop">
      <li>{props.text}</li>
    </li>
  );
  
}

export default Navbar
