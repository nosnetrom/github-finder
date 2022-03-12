import {Link} from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center flex-col justify-center">
      <div className="text-8xl flex-auto">
        404, buddy.
      </div>
      <p className="py-8">Time to go <Link className="btn px-2" to="/">home</Link></p>
    </div>
  )
}

export default NotFound;