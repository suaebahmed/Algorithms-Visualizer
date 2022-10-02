import React from 'react'
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import '../styles/home.css';
import img1 from '../icons/path-finding.png';
import img2 from '../icons/sort-algo.png';
import img3 from '../icons/prime-spiral.png';
import img4 from '../icons/nqueens.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <Navbar msg={'Wellcome To My Algorithms Visualizer'}></Navbar>
      <h1 style={{"textAlign": "center"}}>A Better Visualization Of Different Algorithms</h1>

      <div className='cards-container'>
        <Link className='no_underline' to="/path-finding">
          <Card array={[img1,"Path-Finder"]}/>
        </Link>
        <Link className='no_underline' to="/sorting">
          <Card array={[img2,"Sorting Algorithms"]}/>
        </Link>
        <Link className='no_underline' to="/spiral-prime">
          <Card array={[img3,"Spiral Primes"]}/>
        </Link>
        <Link className='no_underline' to="/nqueens">
          <Card array={[img4,"N queens problem"]}/>
        </Link>
      </div>

      {/* Footer only has for Home page*/}
      <Footer></Footer> 
    </div>
  )
}

export default Home;