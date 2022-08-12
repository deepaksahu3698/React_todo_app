import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Page from "./pages/allPages";
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
