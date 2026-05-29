'use server'
import path from "path"
import fs from "fs/promises"

export async function submitBlogFeedback(formData: FormData) {
  const filepath = path.join(process.cwd(), "app", "data", "feedback.json");
  const feedbackData = await fs.readFile(filepath, "utf8");
  const feedbackArray = JSON.parse(feedbackData);
  
  feedbackArray.push({
    blogId: formData.get("blogId"),
    rating: formData.get("rating"),
    feedback: formData.get("feedback"),
    timestamp: new Date().toISOString()
  });
  
  await fs.writeFile(filepath, JSON.stringify(feedbackArray, null, 2));
}
