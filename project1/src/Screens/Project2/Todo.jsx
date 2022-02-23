import React from "react";

export default function Todo(props) {
    const onDeleteBtnHandler=()=>{
console.log("clicked",props.text)
    }
  return (
    <>
     
      <div style={{backgroundColor:"skyblue",padding:'20px',border:'1px solid gray',width:"30%"}}>
        <h3>{props.text}</h3>
        <button style={{padding:"5px"}} onClick={onDeleteBtnHandler}>Delete</button>
      </div>
    </>
  );
}
