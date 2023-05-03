import React ,{useState,useEffect} from 'react'
import Link from 'next/link'
export const Menu = () =>{ 

  const [menuitem,setMenuItem]= useState('')
  const [ismobliemenu,setIsMoblieMenu]=useState(false)
  const [left,setLeft]=useState(-150)

  const getBrowserWidth=()=>{
    let timeoutId;
    let flag=true
    setIsMoblieMenu(document.body.offsetWidth< 600 ? true :false)
    window.addEventListener('resize',()=>{
      let width= document.body.offsetWidth
      if(flag){
        flag=false;
        setIsMoblieMenu(width< 600 ? true :false)
      }
      clearTimeout(timeoutId)
      timeoutId= setTimeout(() => {
        setIsMoblieMenu(width< 600 ? true :false)
      }, 1000);
    })
  }
  useEffect(()=>{
    getBrowserWidth()
  },[])

  
   useEffect(()=>{
    let pathName=window.location.pathname
    setMenuItem(pathName. slice(1) || 'home')
  },[])
  const fnClick=(event)=>{
  setMenuItem(event.target.id)
  if(ismobliemenu){
    setLeft(-150)
  }
 }
 const fnMoblieMenuBtnClick=()=>{
  setLeft(left === 0 ? -150 :0)
 }
 const fnClose=()=>{
  setLeft(-150)
 }
  return (
    <div>
      {ismobliemenu && <button  onClick={fnMoblieMenuBtnClick} className='moblie-menu-btn'>menu</button>}
  
    <ul style={{left:left}} className={ismobliemenu ? 'moblie-menu' :'menu'}>
     <li><span onClick={fnClose} className='close-btn'>X</span></li> 
      <li>
        <Link  id='home' className={menuitem == 'home'&& 'active-menu'} onClick={fnClick}href="/home">Home</Link>
      </li>
      <li>
        <Link  id='about' className={menuitem == 'about'&& 'active-menu'}onClick={fnClick}href="/about">AboutUs</Link>
      </li>
      <li>
        <Link  id='contact' className={menuitem == 'contact'&& 'active-menu'}onClick={fnClick} href="/contact">Contact</Link>
      </li>
    </ul>
    </div>
  )
}

