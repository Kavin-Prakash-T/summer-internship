import { useEffect, useState } from "react"

export default function Data() {

  type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string
  }


  const [users, setUsers] = useState<User[]>([])
  const [loading,setLoading]=useState<boolean>(true);
  const [error,setError]=useState(null)

    useEffect(()=>{
       fetch("https://dummyjson.com/users")
    .then((response)=>response.json())
    .then((data)=>{
      setUsers(data.users);
      setLoading(false);
    })
    .catch((err)=>{
      setError(err);
      setLoading(false);
    })
    },[])
  

  return (
    <>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    {!loading && !error && 
        users.map((u)=><p key={u.id}>{u.firstName}</p>)
    }
    </>
  )
}
