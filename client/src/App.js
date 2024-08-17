import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Categories from "./components/Categories";
import SongDetail from "./components/SongDetail";
import Songs from "./components/Songs";

function App() {
  return (
    <Router>
      <div className="main">
        <div className="gradient" />
      </div>
      <div className="z-10 font-sans text-gray-800 bg-transparent min-h-screen relative">
        <Header />
        <main className="px-40 pb-20">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/aboutUs" element={<AboutUs/>} />
            <Route path="categories" element={<Categories/>} />
            <Route path="songs" element={<Songs/>} />
            <Route path="songs/:id" element={<SongDetail/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
