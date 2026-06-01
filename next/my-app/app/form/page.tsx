"use client"

import Button from "../components/Button"

const page = () => {
    async function action(){
        await new Promise((resolve,reject)=>{
            setTimeout(resolve,2000)
        })
    }
  return (
    <>
    <form action={action}>
        Username:
        <input type="text"  />
        <Button />
    </form>
    </>
  )
}

export default page