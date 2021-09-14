import React from "react";
import Todo from "./Todo";
import Hoc from "../../HOC";
import './todo.css';

const index = () => {
  return (
    <div className='TodoBlock'>
      <h1>Todo!</h1>
      <Hoc comp={Todo} />
    </div>
  );
}
export default index;
