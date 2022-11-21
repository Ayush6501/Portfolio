import React  from 'react';
import {Suspense} from 'react'
import {Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing'
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import AnimatedCursor from "react-animated-cursor";
import 'semantic-ui-css/semantic.min.css';
import { websiteData } from './data/data'
const Project = React.lazy(() => import('./pages/Project'))


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
            <AnimatedCursor
                innerSize={12}
                outerSize={24}
                color='54, 69, 79'
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={5}
            />
            <Navbar/>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/Portfolio' element={<Suspense fallback={<h1>Loading...</h1>}><Portfolio webData={websiteData} images={images} /></Suspense>}>
                    <Route path='/Portfolio/item/:id' element={ <></>} />
                </Route>

                <Route path='/Project/:id' element={<React.Suspense fallback={<>...</>}><Project /></React.Suspense>}/>
                <Route path='/About' element={<About />}/>
                <Route path='/Contact' element={<Contact/>}/>
                <Route path='/Resume' element={<Resume />}/>
            </Routes>
        </>
    );
}


export default App;
