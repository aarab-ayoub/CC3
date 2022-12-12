import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

export default function DetailUser() {
  const { id } = useParams()
  const { data } = useSelector(state => state.user)
  const Todo = data.users.filter(user => user.id == id)
  return (
    <div>
      <table border={1} >
        <thead>
          <tr>
            <td>image</td>
            <td>firstName</td>
            <td>lastName</td>
            <td>age</td>
            <td>email</td>
            <td>phone</td>
            <td>birthDate</td>
            <td>bloodGroup</td>
            <td>height</td>
            <td>weight</td>
            <td>eyeColor</td>
          </tr>
        </thead>

        <tbody>
          {Todo.map(user =>
            <tr key={user.id}>
              <td><img style={{ width: 100 }} src={user.images[0]} alt="" /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.birthDate}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.eyeColor}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}
