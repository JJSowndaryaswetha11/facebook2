import  React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Posts from './Components/Posts'
import Chatbar from './Components/Chatbar'





function Dashboard() {
  
  
  

  
  return (
    <div>
      
      <div className='facebook'>
    <Sidebar />
    <Posts/>
    <Chatbar/>
    
   
    </div>
     
     
    </div>
  )
}

export default Dashboard