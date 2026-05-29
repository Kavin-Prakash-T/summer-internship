"use client"

import { useParams } from "next/navigation"
import {useState,useEffect} from "react"

type User = {
  id: number;
  firstName: string;
  lastName: string;
}

const UserId = () => {
    const { id } = useParams()

     const [users, setUsers] = useState<User | null>(null);
        async function fetchUser() {
            const res=await fetch(`https://dummyjson.com/users/${id}`);
            const data=await res.json();
            setUsers(data);
        }
    
        useEffect(() => {
            fetchUser();
        }, []);

  return (
    <>
        <div key={users?.id}>
          <h1>User ID: {id}</h1>
          <p>First Name: {users?.firstName}</p>
          <p>Last Name: {users?.lastName}</p>
        </div>
    
    </>
  )
}

export default UserId