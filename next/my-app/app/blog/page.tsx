import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch('https://dummyjson.com/posts?limit=10', {
      next: { revalidate: 60 },
    });
    const data = await res.json();
    return data.posts || [];
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h2>Blog Posts</h2>

      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <p>{post.body.substring(0, 150)}...</p>
              <Link href={`/blog/${post.id}`}>Read More</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
