'use client'

import { submitContactForm } from "../actions/submitContactForm";

export default function page() {
  return (
    <>
    <h1>This is contact page</h1>

    <form action={submitContactForm}>
      <label htmlFor="name">Name:</label> 
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required rows={4} cols={40}></textarea>

      <button type="submit">Send Message</button>
    </form>
    </>
  );
}
