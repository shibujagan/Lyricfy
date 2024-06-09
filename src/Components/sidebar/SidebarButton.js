import React from 'react'
import "./SidebarButton.css"
import {Link, useLocation} from "react-router-dom"
import { IconContext } from 'react-icons/lib'

function SidebarButton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

  const btnclass = isActive ? "btn-body active" : "btn-body";

  return (
    <Link to={props.to}>
      <div className={btnclass}>
        <IconContext.Provider value={{size:'24px',className:'btn-icon'}}>
        {props.icons}
        <p className='btn-title'>{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  
  )
}

export default SidebarButton