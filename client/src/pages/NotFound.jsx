import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function NotFound() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <FaExclamationTriangle className="text-danger" size= '5em'/>
      <h1>404</h1>
      <p className="lead">Sorry This Page Does not Exist</p>
      <Link to='/' className='btn btn-primary'>Back To Home</Link>
    </div>
  )
}
