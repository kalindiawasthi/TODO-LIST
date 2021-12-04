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
      event.target.item.value = ''
    }
    function toggleCompleteStatus(event){
        event.preventDefault()
        console.log(event.currentTarget.id)
       
          setList(list.map(task => {
            return task.id === event.currentTarget.id ? { ...task, complete: !task.complete } : { ...task};
          }));
          deleteItems(event.currentTarget.id)
            
          
          
          console.log(list)
    }
    function deleteItems(id){
        setTimeout(() => {
            setList(list.filter(function(task){
                return task.id !==id
            }))
        },100)
        
        
    }
    return(
        <div>
            <h3>TO DO LIST</h3>
            <List   list = {list} handleToggle = {toggleCompleteStatus} onDelete = {deleteItems}/>
            <ListForm   onHandleAddItem = {handleAddItem} /> <br/>
            
        </div>
    )
}

export default Todo;
