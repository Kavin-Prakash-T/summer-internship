import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPost(id: string) {
  try {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
        <Link href="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/blog">← Back to Blog</Link>

      <h2>{post.title}</h2>

      <p>Post ID: {post.id} | User ID: {post.userId}</p>

      <div>
        <p>{post.body}</p>
      </div>

      <Link href="/blog">Back to Blog</Link>
    </div>
  );
}
