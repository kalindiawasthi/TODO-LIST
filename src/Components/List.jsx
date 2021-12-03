import shortid from 'shortid';
function List({list,handleToggle}){
    
    return(
        <div>
        <h4>list</h4>
        <ul className="list-group list-group-flush">
            { list.map((i) => 
            <li className= "list-group-item d-flex justify-content-between align-items-center " key = {shortid.generate()} id = {i.id} onClick = {(event) => handleToggle(event)}> { i.complete ? <del>{i.item}</del> : i.item } </li>
            )}
        </ul>
        </div>
    )
}

export default List