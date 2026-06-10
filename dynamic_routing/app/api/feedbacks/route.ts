import { NextRequest } from "next/server"

type Feedback={
    id:number,
    message:string
}

let feedbacks:Feedback[]=[
    {
        id:1,
        message:"good"
    }
]

export async function GET(){
    return Response.json({
        feedbacks
    })
}

export async function POST(req:NextRequest){

    const body=await req.json()
    const {id,message}=body
  
    const newFeedback={
        id:Number(feedbacks.length+1),
        message
    }

    feedbacks.push(newFeedback)

    return Response.json({
        "res":"Feedback Added Successfully"
    })
}

export async function DELETE(req:NextRequest){
 const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));

    feedbacks=feedbacks.filter((f) => f.id !== id)

    return Response.json({
        "message":"Feedback Deleted Successfully"
    })
}