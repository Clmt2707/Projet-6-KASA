import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//PAGES
import Accueil from './pages/Accueil/index';
import FicheLogement from'./pages/ficheLogement/index';
import About from './pages/A propos/index';
import Error from './pages/Erreur 404/index';


// Création des routes
function App() {
  return <>
    <Router>
      <Routes>
        <Route path='/' element={<Accueil />}/>
        <Route path='/ficheLogement/id' element={<FicheLogement />}/>
        <Route path='/about' element={<About />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  </>
  

}

export default App;
