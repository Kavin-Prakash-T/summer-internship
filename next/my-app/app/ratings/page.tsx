"use client"
import { getAverageRating, submitRating } from "../actions/submitRating";
import { useEffect, useState } from "react";
import Button from "../components/Button"


function page() {
    async function fetchavgrating(){
      const arating=await getAverageRating()
      setAvgRating(arating)
    }

    const [avgRating,setAvgRating] = useState(0);
    useEffect(()=>{
        fetchavgrating()
    }
)
  return (

    <>
    <p>Average Rating: {String(avgRating).substring(0, 4)}</p>
    <form action={submitRating}>
        <input type="text" name="username" placeholder="Enter the username"/>
         <input type="email" name="email" placeholder="Enter the email"/>
          <input type="text" name="review" placeholder="Enter the review"/>
           <input type="number" name="rating" placeholder="Enter the ratings"/>
            <Button/>
    </form>
    </>
  )
}

export default page