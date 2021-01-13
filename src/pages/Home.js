import React from 'react'
import Hero from '../components/Hero'
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/Products/FeaturedProducts';

const Home = () => {
  return (
    <>
      <Hero>
        <Link to='/prodcuts' className="btn btn-primary btn-hero">our pdroducts</Link>
      </Hero>
      <FeaturedProducts/>
    </>
  )
}

export default Home
