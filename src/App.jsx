import { RouterProvider } from 'react-router-dom'
import { router } from './utils/routes'




function App() {
  
  // let matches = useMatches()
  // console.log(match)
  
  return <RouterProvider router={router} />

}

export default App
