import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/home'
import Delivery from './pages/delivery'
import About from './pages/about'
import News from './pages/news'
import NotFound from './pages/notfound'
import Products from './pages/products'
import NewsItem from './pages/news/NewsItem'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:item' element={<NewsItem />} />
        <Route path='/products/:category' element={<Products />} />
        <Route path='/notfound' element={<NotFound />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App