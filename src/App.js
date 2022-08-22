import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Page from "./pages/homepage";
import Userdetails from './pages/Userdetails';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Page />
    </div>
  );
}

export default App;
