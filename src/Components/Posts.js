import React from 'react'
import  Stories  from './Stories'
import './Posts.css'
import Create from './Create'
import Showpost from './Showpost'
import { useState,useEffect } from 'react'
import {getDocs,collection} from 'firebase/firestore'
import db from './FireBase'

const Posts = () => {
  const[posts,setPosts] = useState([])
  const fetchposts=async()=> {
    const querySnapshot = await getDocs(collection(db,"posts"));
    let temp =[]
    querySnapshot.forEach((doc)=>{
      temp.push({id: doc.id,...doc.data()})
    })
    temp= temp.sort(function(x,y){
        return y.timestamp -x.timestamp
    })
    setPosts(temp)
      
    
  }
  useEffect(()=> {
    fetchposts();

  },[])
  return (
    <div className='posts'>
        
        <Stories/>
        <Create  fetchposts={fetchposts} />
        {
        posts.map((post) => <Showpost {...post} name="Harsha"/>)
      }
        
    </div>
    
  )
}

export default Posts