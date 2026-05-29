import Navbar from "@/components/Navbar"

const layout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>Contact Page layout
        <Navbar/>
        {children}
    </div>
  )
}

export default layout