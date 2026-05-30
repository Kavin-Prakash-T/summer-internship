'use client'

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from "react"
import { submitFeedbackForm } from '@/app/actions/submitFeedbackForm';
import { useFormStatus } from 'react-dom';
interface Post {
  id: number;
  title: string;
  body: string;
}



export default function Blog() {

  const { pending } = useFormStatus()

  const [data, setData] = useState<Post[]>([])
  async function getPost(id: any) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    const data = await res.json()
    setData([data])
  }
  const { id } = useParams()

  useEffect(() => {
    if (id)
      getPost(id);
  }, [id])

  const submitFeedbackFormWithId = submitFeedbackForm.bind(null, String(id))

  return (
    <>
      <h1>Blog Post</h1>
      <Link href="/blog">Back to Blog</Link>

      <div>
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <small>Post ID: {post.id}</small>
            <form action={submitFeedbackFormWithId}>
              <textarea rows={5} cols={10} placeholder="Enter your feedback..." name='feedback' ></textarea>
              <button type="submit" disabled={pending}>
                {pending ? "Submitting Feedback.........." : "Submit"}
              </button>
            </form>
          </div>

        ))}
      </div>
    </>
  );
}
