import React from 'react';

const Item = props => {
  let calorie = props.quantity.calories
  return(
    <li>
       {props.quantity} - {props.name} = {calorie}
       <button onClick={() => props.deleteFood(props.key)} className="button-info"> Delete</button>
      </li>
  )
}
export default Item;