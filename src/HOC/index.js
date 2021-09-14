import React,{useState} from "react";

const Hoc = props => {
    const [todos, setTodos] = useState([
        { task: "Learn about React",status: 0},
        { task: "Meet friend for lunch",status: 1},
        { task: "Build really cool todo app",status: 0}
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