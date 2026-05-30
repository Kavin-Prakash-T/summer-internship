import Link from 'next/link';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getPosts() {
  const res = await fetch('https://dummyjson.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data.posts;
}

export default async function Blog() {
  const posts: Post[] = await getPosts();

  return (
    <>
      <h1>Blog Posts</h1>
      <Link href="/">Back to Home</Link>

      {posts.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <small>Post ID: {post.id}</small>
          </div>
        </Link>
      ))}
    </>
  );
}
