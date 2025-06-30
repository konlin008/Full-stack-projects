import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const HomePage = () => {
    const [user, setUser] = useState({})
    const getUserName = async () => {
        try {
            await axios.get('http://localhost:8080/api/v1/user', { withCredentials: true })
        } catch (error) {
            console.log(error);
        }

    }
    getUserName()

    return (
        <div>HomePage</div>
    )
}
