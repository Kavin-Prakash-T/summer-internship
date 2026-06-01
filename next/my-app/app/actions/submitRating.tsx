'use server'
import pool from "../database/db"
import { revalidatePath } from "next/cache";

export async function submitRating( formData: FormData) {
  try {
    const username=formData.get("username") as string
    const email=formData.get("email") as string
    const review=formData.get("review") as string
    const rating=Number(formData.get("rating"))

    await pool.query(
      `INSERT INTO ratings(username,email,review,rating) VALUES($1,$2,$3,$4)`,
      [username, email, review, rating]
    )
    revalidatePath("/blog")
  } catch (error) {
    console.error('Database error:', error)
    throw error
  }
}


export async function getAverageRating() {
  const result = await pool.query("SELECT AVG(rating) as average FROM ratings");
  console.log(result)
  return result.rows[0].average;
}