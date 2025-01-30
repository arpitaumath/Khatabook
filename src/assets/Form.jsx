import { useEffect, useState } from "react"

const Form =({addtrans ,edit ,updateTrans}) =>{
  const [name , setName] =useState("")
  const [money , setMoney] = useState("")
  const add =(e) =>{
    e.preventDefault()
    !edit.isEdit ? addtrans(name,money) :updateTrans({id:edit.transection.id ,name  , money:+money})
    setName("")
    setMoney("")
  }
  useEffect(()=>{
   setName(edit.transection.name)
   setMoney(edit.transection.money)
  },[edit])

    return(
        <form onSubmit={(e) => add(e)}>
        <input type='text' placeholder='Enter transection' className='form-control round-0 my-3' onChange ={(e) =>setName(e.target.value) } value={name}/>
        <input type='text' placeholder='Enter amount' className='form-control round-0 my-3' onChange={(e) => setMoney(e.target.value)} value={money}/>
        <button className='btn btn-success w-100 rounded-0 my-2'>Save transection</button>
      </form>
  
    )
}

export default Form