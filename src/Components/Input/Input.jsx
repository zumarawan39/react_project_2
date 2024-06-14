import React from 'react'
import style from "./Input.module.css"
const Input = (props) => {
  return (
    <div className={style.parent}>
       <label htmlFor="input_1" className={style.label}>{props.name}</label>
       <input type="text" className={props.isBolean?style.input_2:style.input_1} /> 
    </div>
  )
}

export default Input