import React from 'react'
import BootstrapCarousel from "./BootstrapCarousel/BootstrapCarousel";
import Cards from './Cards/Cards';
import Article1 from "./Article1/Article1";
import Article2 from "./Article2/Article2";
import Article3 from "./Article3/Article3";
import Article4 from "./Article4/Article4";
import Article5 from "./Article5/Article5";
import MediaArticle from "./MediaArticle/MediaArticle";
import Article6 from "./Article6/Article6";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import BackToTopText from './ScrollToTop/BackToTopText';



const Home = () => {
  return (
    <>
      <Header />
      <BootstrapCarousel />
      <Cards />
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
      <Article5 />
      <MediaArticle />
      <Article6 />
      <Footer />
      <BackToTopText />
    </>
  )
}

export default Home