import './App.css';
import React from 'react';
 import CardPhotos from './components/CardPhotos' ;

 import Titlecomponent from './components/Titlecomponent';
 import Accord from './components/Accord';



 import FooterCard from './components/FooterCard';
// import ModalSet from './components/Modal/ModalSet';

function App() {
  return (
   
      <main className='App'>   
      {/* <CardPhotos/>     */}
      <Titlecomponent/>      
      
      <FooterCard/>     
      
      </main>
     
  );
}


export default App;
