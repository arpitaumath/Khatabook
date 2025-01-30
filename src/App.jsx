import Form from "./assets/Form";
import Navbar from "./assets/Navbar";
import React, { useState } from "react"
import Dashboard from "./assets/Dashboard";
import Listgroup from "./assets/Listgroup";


const App = () => {
 const [transections , setTransections] = useState([ ])
const [edit ,setEdit] =useState({transection : {},isEdit: false})
 const deletetrans =(id) =>{
  // console.log(id)
  setTransections(transections.filter(item =>  item.id !== id ))
  
 }

 const addtrans =(name,money) =>{
  setTransections([{id:crypto.randomUUID(),name:name,money:parseInt(money)},...transections])

 }
 const editTrans =(transection) =>{
  setEdit({transection : transection , isEdit :true})
 }
 const updateTrans = (updateTrans) =>{
  setTransections(transections.map((transection) =>
     transection.id == updateTrans.id ? updateTrans : transection ))
  setEdit({transection:{} ,isEdit:false})
  console.log(updateTrans)
 }
  return (
   <>
   <Navbar/>
   <div className="container p-5">
   <Form addtrans={addtrans} edit={edit} updateTrans={updateTrans}/>
    <Dashboard transections={transections}/>


    
   
       
   </div>
    
   <Listgroup transections={transections} deletetrans={deletetrans} editTrans ={editTrans} />
   </>
  )
}

export default App
