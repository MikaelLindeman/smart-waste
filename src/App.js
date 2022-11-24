import { Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Annonser from './components/Annonser/Annonser';
import Nyannons from './components/NyAnnons/Nyannons';
import Profil from './components/Profil/Profil';

function App() {

    return (
    <>
    <Navbar />
        <Routes>
            <Route path ="/"  element={<Annonser />}/>
            <Route path ="/Nyannons"  element={<Nyannons />}/>
            <Route path ="/Profil"  element={<Profil /> }/>
        </Routes>

    </>
  );
}

export default App;
