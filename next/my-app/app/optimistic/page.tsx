'use client'

import { useOptimistic, startTransition } from "react"

const comments=[
    "Hi there",
    "How are you?"
]


function page() {

    const [optimisticComments, setOptimisticComments] = useOptimistic(comments,(state:string[],newValue:string) => [...state, newValue])

    function handleClick(){
      const comment="I am learning use Optimistic"
      startTransition(()=>{
        setOptimisticComments(comment)
      })
    }


  return (
    <>
    <h1>User Comments</h1>
    <h2>{optimisticComments.join(', ')}</h2>
    <button onClick={handleClick}>
      Add Comment
    </button>
    </>
  )
}

export default page