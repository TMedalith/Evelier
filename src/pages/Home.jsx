import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/products';
import Navigation from '../components/Navigation';
import Styles from '../components/Styles';
import Hero from '../components/Hero';
import Carrousel from '../components/Carrousel';
import Footer from '../components/Footer';

function Home() {
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSelling, setBestSelling] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      products.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      const latestProducts = products.slice(0, 9);
      setNewArrivals(latestProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Styles />
      <Carrousel products={newArrivals} title='NEW ARRIVALS' />
      <Carrousel products={newArrivals} title='TRENDING NOW' />
      <Footer />
      
    </div>
  );
}

export default Home;
