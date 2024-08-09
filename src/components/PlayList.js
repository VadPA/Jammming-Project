import React from "react";

export default function PlayList(props) {

  return (
    <>
      <div>
        <ul className="items">
          {props.items.map(item => (
            <li key={item.id}>

            </li>))}
        </ul>
      </div>
    </>
  )
}