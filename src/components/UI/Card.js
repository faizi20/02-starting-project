import React from 'react'
import classes from './Card.module.css'

function Card(props) {
  return (
    <div className={`${classes.card} ${props.className}`} type={props.type || 'button'} onClick={props.onClick}>{props.children}</div>
  )
}

export default Card