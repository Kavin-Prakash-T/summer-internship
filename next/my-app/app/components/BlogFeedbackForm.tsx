'use client'
import { submitBlogFeedback } from '@/app/actions/submitBlogFeedback';

export default function BlogFeedbackForm({ postId }: { postId?: number | string }) {
  if (!postId) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    formData.append('blogId', String(postId));
    
    try {
      await submitBlogFeedback(formData);
      e.currentTarget.reset();
      alert('Thank you for your feedback!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="feedback" 
        placeholder="Enter your feedback" 
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
