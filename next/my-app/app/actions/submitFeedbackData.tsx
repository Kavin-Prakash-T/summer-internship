'use server'
import pool from "../database/db"
import { revalidatePath } from "next/cache";

export async function submitFeedbackData(blogId: string, formData: FormData) {
  try {
    const feedback = formData.get("feedback") as string
    const blogid = Number(blogId)

    await pool.query(
      `INSERT INTO feedbacks(blogid,feedback) VALUES($1,$2)`,
      [blogid, feedback]
    )
    revalidatePath("/blog")
    await getFeedbacks()
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}


export async function getFeedbacks() {
  const result = await pool.query("SELECT * FROM feedbacks");
  console.log(result.rows)
}