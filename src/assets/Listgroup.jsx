import Listitem from "./Listitem"
const Listgroup =({transections , deletetrans , editTrans}) =>{
    return(
        <ul className='list-group mx-5 my-2'>
        {transections.map((transection) => <Listitem transection={transection} key={transection.id} deletetrans={deletetrans} editTrans={editTrans} />)}
       
      </ul>  
    )
}
export default Listgroup