import {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing'
import Portfolio from './pages/Portfolio'
import Navbar from './components/Navbar'
import Project from './pages/Project'
import About from './pages/About';
import { useNavigate } from "react-router-dom";

const pexel = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574) },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
]

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/Portfolio' element={<Suspense fallback={<h1>Loading...</h1>}><Portfolio images={images} /></Suspense>}>
          <Route path='/Portfolio/item/:id' element={ <></>} />
        </Route>
        <Route path='/Project/:id' element={<Project />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
    </>
  );
}


export default App;
