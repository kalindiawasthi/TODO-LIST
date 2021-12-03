import { useState } from 'react'
import List from './List.jsx'
import ListForm from './ListForm.jsx'


function Todo(){
  const  [list,setList] = useState([])
    
    function handleAddItem(event){
        console.log(event.target.item.id)
        event.preventDefault()
        setList(list.concat({id: event.target.item.id ,item:event.target.item.value,complete:false}))
        console.log(list)
    }
    function toggleCompleteStatus(event){
        event.preventDefault()
        console.log(event.currentTarget.id)
       
          setList(list.map(task => {
            return task.id === event.currentTarget.id ? { ...task, complete: !task.complete } : { ...task};
          }));
          console.log(list)
    }
    function deleteItems(){
        setList(list.filter(function(task){
            return task.complete === false
        }))
        
    }
    return(
        <div>
            <h3>TO DO LIST</h3>
            <List   list = {list} handleToggle = {toggleCompleteStatus}/>
            <ListForm   onHandleAddItem = {handleAddItem} /> <br/>
            <button className="btn btn-primary" onClick = {deleteItems}>Clear Completed Task</button>
        </div>
    )
}

export default Todo;
