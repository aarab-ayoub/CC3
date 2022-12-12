import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../redux/UserSlice'
import User from './User'
import "./User.css"

function ListUser() {
    const users = useSelector(state => state.user.data.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])

    return (
        <div className='div1'>
            {users && users.map(item => (
                <User data={item}/>
            ))}
        </div>
    )
}
export default ListUser;