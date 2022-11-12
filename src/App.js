import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/home';
import Blog from './pages/Blog/blog';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainQuiz from './quiz/pages/Main';
import Quiz from './quiz/pages/Quiz';
const App = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
        <Route path='/main' element={<MainQuiz />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;