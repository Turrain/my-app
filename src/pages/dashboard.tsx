import { useSession } from "next-auth/react"

export default  function Dashboard(){
    const session = useSession()
    
    if(session.status == 'unauthenticated'){
        return (
            <div>
   You don't logged in
            </div>
        )
     
    }
    return (
        <div>
            TEST {session.data?.user?.email}
        </div>
    )
}