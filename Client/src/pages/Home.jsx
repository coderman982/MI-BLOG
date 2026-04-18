import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import BlogList from '../components/BlogList'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import DarkModeToggle from '../components/DarkModeToggle'

const Home = () => {
  return (
    <div className='min-h-screen bg-white'>
      <Navbar />
      <DarkModeToggle />
      <Header />
      <BlogList />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home
