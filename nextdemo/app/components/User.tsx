// 'use client'
import React from 'react'

interface userListType{
    id: string;
    title: string;
}
const User = async () => {
    // let userList : userListType[]  = [{id:'1',name:'arvind'},{id:'2',name:'pri'}];
    let userList : userListType[]  = [];
    try{
    const res   =  await fetch('https://jsonplaceholder.typicode.com/posts');
    userList = await res.json();
    }catch(e){
        console.log("error",e)
    }
  return (
    <div>
        <div>{new Date().toLocaleTimeString()}</div>
      {userList.length>0 && userList?.map(u=><div key ={u.id}>{u.id}-{u.title}</div>)}
    </div>
  )
}

export default User
