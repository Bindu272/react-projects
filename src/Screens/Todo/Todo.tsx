import { Dangerous, Delete } from '@mui/icons-material';
import { Box, Button, Container, Input, Sheet } from '@mui/joy'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react'


const Todo = () => {
    const [inputValue, setInputValue]=useState<string>('')
    const [todo, setTodo] = useState<string[]>([]);
    const [editList, setEditList] = useState(null);
    const addToDo = () => {
        if (editList === null) {
          setTodo([...todo, inputValue]);
          setInputValue("");
        } else {
          updateTodo(editList);
        }
      };
      const deleteTodo = (index:any) => {
        console.log(index);
        const todoList = todo.filter((todos, i) => i != index);
        setTodo(todoList);
      };
      const editTodo = (index:any) => {
        setEditList(index);
        setInputValue(todo[index]);
      };
      const updateTodo = (index:any) => {
        const updatedTodo = [...todo];
        updatedTodo[index] = inputValue;
        setTodo(updatedTodo);
        setInputValue("");
        setEditList(null);
      };
    return (
        <>
         <div style={{display:'flex', flexDirection:'column'}}>
            <Input 
                endDecorator={<Button onClick={addToDo}>Add</Button>}
                sx={{
                    "--Input-gap": "15px",
                    "--Input-focusedThickness": "1px",
                    "--Input-minHeight": "50px",
                    "--Input-paddingInline": "30px",
                   
                  }}
                  placeholder='Type In Here....'
                  value={inputValue}
                  onChange={(e)=>setInputValue(e.target.value)}
            />
            
            
              
          {todo.map((todos, index) => (
          <div style={{display:'flex', flexDirection:'row', padding:'10px'}}>
          
            <Sheet variant="soft" color="primary" sx={{ p: 1,width:'100%', textAlign:'center' }} key={index}>
              {todos}
              
            </Sheet>
            <EditIcon sx={{ color: '#272aed', cursor:'pointer', pt:'0.5rem' }} fontSize='small'  onClick={() => editTodo(index)}>Edit</EditIcon>
            
            <DeleteIcon sx={{ color: '#ed2748', cursor:'pointer', pt:'0.5rem' }} fontSize='small'  onClick={() => deleteTodo(index)}>delete</DeleteIcon>
              
          </div>
          ))}
        
       
        </div>
       
        </>
    )
}

export default Todo
