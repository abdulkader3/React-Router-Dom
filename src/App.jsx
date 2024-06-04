import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Ami from './pages/Ami'
import Tome from './pages/Tome'
import Rkewnai from './pages/Rkewnai'
import Rkawkelagbeona from './pages/Rkawkelagbeona'
import Sobbad from './pages/Sobbad'
import Wtf from './pages/Wtf'

function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Navbar/>}/>
      <Route path='/Ami' element={<Ami/>}/>
      <Route path='/Tome' element={<Tome/>}/>
      <Route path='/Rkewnai' element={<Rkewnai/>}/>
      <Route path='/Rkawkelagbeona' element={<Rkawkelagbeona/>}/>
      <Route path='/Sobbad' element={<Sobbad/>}/>
      <Route path='*' element={<Wtf/>}/>
    </Route>
  )

  )

  return (
    <>



    <RouterProvider router={route}/>











      
    </>
  )
}

export default App
