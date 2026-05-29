import Link from 'next/link';
import BlogFeedbackForm from '@/app/components/BlogFeedbackForm';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPost(id: string) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  return res.json();
}

export default async function Blog({ params }: { params: { id: string } }) {
  const post: Post = await getPost(params.id);

  return (
    <>
      <h1>Blog Post</h1>
      <Link href="/blog">Back to Blog</Link>
      
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <small>Post ID: {post.id}</small>
      </div>
      <BlogFeedbackForm postId={post.id} />
    </>
  );
}
