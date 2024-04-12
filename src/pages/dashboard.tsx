import { useSession } from "next-auth/react"

export default  function Dashboard(){
    const session = useSession()
    
  
    return (
        <div>
            TEST {session.data?.user?.email} ewfewfwef
        </div>
    )
}