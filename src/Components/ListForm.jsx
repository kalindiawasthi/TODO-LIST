function ListForm({onHandleAddItem}){
    
    return(
        
        <form className="row row-cols-lg-auto g-3 justify-content-center" onSubmit = {(event) => onHandleAddItem(event)} >
        <div className="col-4">
            <label className="visually-hidden" htmlFor="task"><h3>Add task</h3></label>
            <div className="input-group">
  
                <input type="text" className="form-control"  placeholder="Enter task ..." id={Date.now()} name = 'item'  rows="1" />
            </div>

        </div>
        <div className="col-3 mt-auto">
            <button type="submit" className="btn btn-primary">Add Task</button>
        </div>
        
         </form>
    
    )
}
export default ListForm