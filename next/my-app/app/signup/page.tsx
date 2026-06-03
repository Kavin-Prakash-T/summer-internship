const page = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <form action="/signup" method="POST">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="enter username" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="enter email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="enter password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default page