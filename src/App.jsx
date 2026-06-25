import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import PlayList from "./pages/PlayList";
import Liked from "./pages/Liked";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
