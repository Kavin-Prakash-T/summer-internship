import { useState } from "react"

function ContactForm() {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    async function handleSubmit(e:any) {
        e.preventDefault()
        await fetch("http://localhost:8000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ fullname, email, message })
        })
    }


    return (

        <div>
            <h1>Contact Form</h1>
            <label htmlFor="fullname">Full Name:</label>
            <input type="text" placeholder='Enter your full name' name="fullname" id="fullname" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            <br /><br />
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Enter your email' name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
            <label htmlFor="message">Message:</label>
            <textarea placeholder='Enter your message' name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <br /><br />
            <button type="submit" onClick={handleSubmit}>Send Message</button>
        </div>
    )
}

export default ContactForm