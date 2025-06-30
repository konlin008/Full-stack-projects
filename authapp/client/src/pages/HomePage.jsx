import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const HomePage = () => {
    const [userName, setUserName] = useState('')
    const getUserName = async () => {
        try {
            const res = await axios.get('http://localhost:8080/api/v1/user', { withCredentials: true })
            setUserName(res.data?.user_Name)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        getUserName()
    }, [])
    return (
        <div>welcome {userName}</div>

    )
}
