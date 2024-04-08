// import React from 'react'

import { useContext } from "react"
import UserContext from "../Context/UserContext"

function Profile() {
    const {user} = useContext(UserContext)

    if(!user) return <h1>Not logged</h1>
  return (
    <div>
        <h1>Profile: {user.userName}</h1>
    </div>
  )
}

export default Profile