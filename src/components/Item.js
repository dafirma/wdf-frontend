import React from 'react';

const Item = props => {
  let calorie = props;
  console.log(calorie)
  return(
    <li>
       {props.quantity} - {props.name}
       <button onClick={() => props.deleteFood(props.key)} className="button-info"> Delete</button>
      </li>
  )
}
export default Item;