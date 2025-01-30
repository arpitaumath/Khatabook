const Dashboard =({transections}) =>{
   const income = transections.filter((trans )=> trans.money > 0).reduce
   ((p, c) => p+c.money, 0)
     
      const expenses = transections.filter((trans )=> trans.money < 0).reduce
   ((p, c) => p+c.money, 0)
      

   const balance = transections.reduce((p,c) => p + c.money,0 )
   
    return(
        <div className='row my-2'>
       <div className='col-md-4 col-sm-12 '>
            <div className='card p-3 bg-success rounded-0 text-light'>
            <h1 className='display-6'>Total income</h1>
            <h1 className='display-5 '>{income}</h1>

             </div>
       </div>
       <div className='col-md-4 col-sm-12'>
       <div className='card p-3 bg-danger rounded-0 text-light'>
    <h1 className='display-6'>Total expenses</h1>
    <h1 className='display-5'>{expenses}</h1>

    </div>

       </div>
       <div className='col-md-4 col-sm-12'>
       <div className='card p-3 bg-warning rounded-0 text-light'>
    <h1 className='display-6'>Total balance</h1>
    <h1 className='display-5'>{balance}</h1>

    </div>
       </div>
    </div>
    )
}

export default Dashboard