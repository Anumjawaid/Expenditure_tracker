import React from 'react';
import Header from './blocks/header';
import History from './blocks/history';
import {TransactionProvider } from './blocks/transContext';


import './App.css';

function App() {
  return (

    <div className="container">
     <TransactionProvider>
       <Header/>
       <History/>
     </TransactionProvider>
         </div>
     
    

  );
}

export default App;
