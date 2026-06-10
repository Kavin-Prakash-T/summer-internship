"use client"

import { useEffect, useState } from "react"

type Feedback = {
    id: string | number,
    message: string
}

const page = () => {

    const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
    const [message, setMessage] = useState<string>("")

    async function addFeedback() {
        const feedback = {
            message: message
        }
        const res = await fetch("http://localhost:3000/api/feedbacks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })

        if (res.ok) {
            const data = await res.json()

            const newFeedback = data.message || data
            setFeedbacks((prev) => [...prev, newFeedback])
            setMessage("")
        }
    }

    useEffect(() => {
        async function getFeedbacks() {
            try {
                const res = await fetch("http://localhost:3000/api/feedbacks");

                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                setFeedbacks(data.feedbacks);
            } catch (error) {
                console.error("Successfully caught fetch error:", error);
            }
        }
        getFeedbacks();
    }, []);

    async function deleteFeedback(id: number|string) {
        const res = await fetch(`http://localhost:3000/api/feedbacks?id=${id}`, {
            method: 'DELETE'
        })
        if (res.ok) {

            setFeedbacks((prev) => prev.filter(item => item.id !== id))
        }

    }
    return (
        <>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} id="feedback" placeholder="Write your feedback" />

            <br /><br />
            <button onClick={addFeedback}>Add Feedback</button>
            <br /><br />
            <h1>Feedbacks</h1>

            {
                feedbacks?.map((f: Feedback) => (
                    <div key={f.id}>
                        <h5>{f.message}</h5>
                        <button onClick={()=>deleteFeedback(f.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default page