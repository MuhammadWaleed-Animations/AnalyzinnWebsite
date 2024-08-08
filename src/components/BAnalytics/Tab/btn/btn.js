import React from "react"
import "./btn.css"

const btn = (props)=>{
    return<div> 
    <a href={props.children}>
    <button className="gradient-button">Show More Info</button>
  </a>
  </div>

}
export default btn