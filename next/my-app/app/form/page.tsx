"use client"
import {useFormStatus} from "react-dom"

function Button(){
const {pending}=useFormStatus();
return(
    <>
    <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
    </button>
    </>
)


}

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