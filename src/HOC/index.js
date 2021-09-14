import React,{useState} from "react";

const Hoc = props => {
    const [todos, setTodos] = useState([
        { task: "Read the ticket!",status: 0},
        { task: "Go through the task.",status: 1},
        { task: "Code and coffee!!",status: 0}
      ]);

      const deleteTask = id => {
          const newTodos = [...todos];
          newTodos.splice(id, 1);
          setTodos(newTodos);
      }
      const addTask = text => {
        const newTodos = [...todos, { task : text, status : 0 }];
        setTodos(newTodos);
      };

      const finishTask = id => {
        const newTodos = [...todos];
        newTodos[id].status = !newTodos[id].status;
        setTodos(newTodos);
      }
      
      return(
          <div>
              <props.comp 
                    list={todos} 
                    delete={deleteTask}
                    create={addTask}
                    done={finishTask}
                    />
          </div>
      );
      
  }

export default Hoc;