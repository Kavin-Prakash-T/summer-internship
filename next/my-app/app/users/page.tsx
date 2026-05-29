'use client'
import Link from 'next/link';
import {useState,useEffect} from 'react'

type User = {
  id: number;
  firstName: string;
  lastName: string;
}


function page() {

    const [users, setUsers] = useState<User[]>([]);
    async function fetchUser() {
        const res=await fetch("https://dummyjson.com/users");
        const data=await res.json();
        setUsers(data.users);
    }

    useEffect(() => {
        fetchUser();
    }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.firstName}</Link> {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default page