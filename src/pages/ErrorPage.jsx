import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  const error = useRouteError()

  return (
    <div className='w-full h-[90vh] text-white'>
        {error.message}
    </div>
  )
}

export default ErrorPage