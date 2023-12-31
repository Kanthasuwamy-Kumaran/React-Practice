import './App.css';
import React from "react";
import './assets/css/style.css'
import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/vendor/aos/aos.css'
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/vendor/boxicons/css/boxicons.min.css'
import './assets/vendor/glightbox/css/glightbox.min.css'
import './assets/vendor/remixicon/remixicon.css'
import './assets/vendor/swiper/swiper-bundle.min.css'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';



function App() {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
