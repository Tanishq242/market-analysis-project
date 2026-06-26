import { useEffect, useState } from "react";
import './App.css'
import Header from "./components/header";
import LeftPanel from "./components/leftPanel";
import RightPanel from "./components/rightPanel";
export default function App() {
  return (
    <>  
    <Header />
    <div id="main-container">
      <LeftPanel />
      <RightPanel />
    </div>
    </>
    
  );
}