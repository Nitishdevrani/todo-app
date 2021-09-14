import React,{useState} from "react";

const CreateTodo = (props) => {
    const [text, setText] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!text) return;
      props.create(text);
      setText("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={text}
          placeholder="Add a task!!"
          onChange={e => setText(e.target.value)}
        />
      </form>
    );
  }
  export default CreateTodo;