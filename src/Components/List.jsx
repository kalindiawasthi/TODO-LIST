import shortid from 'shortid';
function List({list,handleToggle,onDelete}){
     
    return(
        <div>
        <h4>list</h4>
        <ul className="list-group ">
            { list.map((i) => 
            <li className= {i.complete ? "list-group-item d-flex justify-content-between align-items-center item-fadeout" : "list-group-item d-flex justify-content-between align-items-center "} key = {shortid.generate()} id = {i.id} onClick = {(event) => handleToggle(event)}> {i.item } 
            <button className="btn btn-primary" onClick = {onDelete}>Clear Completed Task</button>
            </li>
            )}
        </ul>
        </div>
    )
}

export default List
