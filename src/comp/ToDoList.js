import React, { useState } from 'react';
import TodoService from '../service/TodoService';

function ToDoList(){
    const[todos,setTodos] = useState([]);
    const[newTodo,setNewTodo] = useState("");
   
    const handleInputChange = (event) => {
     setNewTodo(event.target.value);
    //  console.log(newTodo)
    };

    // const handleAddTodo = (event) =>{
    //     if(newTodo.trim()!=''){
    //         setTodos([...todos,{text: newTodo, completed: false}]);
    //        setNewTodo('');
           
    //     }
    // };
    const handleAddTodo = (event) =>{
      let object ={
        title:todos.title
        // completed:todos.completed
        }
      if ( todos === '') {
        return;
    } else {
          console.log(object)
        TodoService.addingData()
            .then((response) => {
                 console.log(response)
                alert("data added")
            })
    }
    }
     const handleToggleComplete = (index) =>{
        const updateTodos =[...todos];
        updateTodos[index].completed = !updateTodos[index].completed;
        setTodos(updateTodos);
     };

     const handleDeleteTodos = (index) =>{
        const updatedTodos = todos.filter((_, i )=>i !== index);
        setTodos(updatedTodos);
     };
 

     return(
        <div>
            <h2>Todo List</h2>
            <input
            type="text"
            value = {newTodo}
            onChange = {handleInputChange}
            placeholder="Enter A New Todo "
            />
           <button onClick={handleAddTodo}>Add</button>
           
           <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todos.completed}
              onChange={() => handleToggleComplete(index)}
            />
              <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodos(index)}>Delete</button>
            <button onClick={() => handleToggleComplete(index)}>Update</button>
          </li>
        ))}
      </ul>
        </div>
     )
}
export default ToDoList;