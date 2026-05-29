'use server'
import path from "path"
import fs from "fs/promises"


export async function submitContactForm(formData: FormData) {
  const filepath = path.join(process.cwd(), "app", "data", "users.json");
  const users = await fs.readFile(filepath, "utf8");
  const usersArray = JSON.parse(users);
  usersArray.push({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  });
  await fs.writeFile(filepath, JSON.stringify(usersArray));
}