import React from 'react';

const Item = props => {
  //let calorie = props;
  console.log(props)
  return(
    <li>
       {props.quantity} - {props.name}
       <button onClick={() => props.deleteFood(props.key, props.name)} className="button-info"> Delete</button>
      </li>
  )
}
export default Item;