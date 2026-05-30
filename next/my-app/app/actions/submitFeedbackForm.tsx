'use server'
import path from "path"
import fs from "fs/promises"
import { revalidatePath } from "next/cache";

export async function submitFeedbackForm(blogId: string, formData: FormData) {
  const filepath = path.join(process.cwd(), "app", "data", "feedback.json");
  const feedbackData = await fs.readFile(filepath, "utf8");
  const feedbackArray = JSON.parse(feedbackData);
  console.log(formData)

  feedbackArray.push({
    feedback: formData.get("feedback"),
    blogId: blogId
  });

  await fs.writeFile(filepath, JSON.stringify(feedbackArray, null, 2));
  revalidatePath("/blog")
}
