const Listitem =({transection ,deletetrans ,editTrans}) =>{
    return(
        <li className='list-group-item rounded-0'>
        
        <h4>{transection.name}</h4>
          <h1 >{transection.money}</h1>
          <span className='float-end'>
            <button className='btn btn-warning rounded-0 ' onClick={() => {editTrans(transection)}}>Edit</button>
            <button className='btn btn-danger text-light rounded-0 ' onClick={() =>{deletetrans(transection.id)}}>Delete</button>
   
          </span>
        </li>    
    )
}

export default Listitem