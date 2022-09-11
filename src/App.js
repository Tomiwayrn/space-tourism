
 import Navbar from './Navbar';
import React from 'react';
import Destination from './destination';
import Crew from './crew';
import Technology from './technology';
import Home from './Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  
  const [modal, setModal] = React.useState(false);
  const [pages, setCurrPage] = React.useState('')

  return (
    <> 
    
      
     <BrowserRouter>
     <Navbar pages={pages} setCurrPage={setCurrPage} setModal={setModal} /> 
      <Routes>
       
        <Route path='/' element={<Home setCurrPage={setCurrPage} modal={modal} />} />
        <Route path='crew' element={<Crew modal={modal} /> } />

        <Route path='destination' element={<Destination modal={modal} />} />


        <Route path='technology' element={<Technology modal={modal} /> } />

      </Routes>
     </BrowserRouter>
        
  </>
       
 
  );
}

export default App;
