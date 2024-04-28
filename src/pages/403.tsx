import { NextPage } from 'next'

const ForbiddenPage: NextPage = () => {
  return (
    <div>
      <h1>403 Forbidden</h1>
      <p>You dont have permission to access this page.</p>
    </div>
  )
}

export default ForbiddenPage