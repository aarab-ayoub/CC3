import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./User.css"
function User(props) {
const navigate=useNavigate();
    return (
        <div className='card'>
            <div className='div2'>
                <img src={props.data.image} alt="" />
                <p>{props.data.firstName} {props.data.lastName}</p>
                <button onClick={()=>navigate(`details/${props.data.id}`)}>Detail User</button>
                <button onClick={()=>navigate(`taches/${props.data.id}`)}>Liste des taches</button>
            </div>

        </div>
    )
}
export default User;