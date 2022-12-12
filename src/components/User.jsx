import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./User.css"
function User(props) {
const navigate=useNavigate();
    return (
        <div className='card'>
            <div className='div2'>
                <img style={{ width: 100 }} src={props.data.image} alt="" />
                <h1>{props.data.firstName} {props.data.lastName}</h1>
                <button onClick={()=>navigate(`data/${props.data.id}`)}>detail user</button>
                <button onClick={()=>navigate(`todo/${props.data.id}`)}>liste des taches </button>
            </div>

        </div>
    )
}
export default User;