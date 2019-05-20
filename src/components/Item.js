import React from 'react';
import '../stylesheets/Item.scss'
const Item = props => {
  //let calorie = props;
  //console.log(props)
  return(
    <li>
             {props.title} - {props.quantity} <span> {props.unity}</span>
       <button onClick={() => props.deleteFood(props.title)} className="btn-delete-food"> <span>Delete</span></button>
      </li>
  )
}
export default Item;

