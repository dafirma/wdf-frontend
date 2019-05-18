import React from 'react';

const Item = props => {
  //let calorie = props;
  //console.log(props)
  return(
    <li>
             {props.title} - {props.quantity} <span>Qnt</span>
       <button onClick={() => props.deleteFood(props.title)} className="button-info"> Delete</button>
      </li>
  )
}
export default Item;

