import React from "react";
import "./App.css";
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import SubHeader from './components/SubHeader';
import TopNav from './components/TopNav';

function App(props) {
  console.log(props)
  const currentCat = props.state.products.filter(cat => cat.category === props.currentCategory);
  console.log(currentCat)
  return (
    <div className="App">
      <div className="wrap">
        <Header />
        <SubHeader />
        <TopNav changeCategory={props.changeCategory} />
        <ImageSlider />
        <div className="content">
          <div className="products-box">
            <div className="products">
              <h5><span>FEATURED</span> PRODUCTS</h5>
            </div>
            <div className="products products-secondbox">
              <h5><span>Our</span> Specials</h5>
              <div className="section group">
                <ProductDetail products={currentCat} />
              </div>
            </div>
          </div>
        </div>
        <div className="clear"> </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
