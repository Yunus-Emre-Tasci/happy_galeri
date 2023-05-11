import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Podcast from './pages/Podcast';
import Footer from './pages/Footer';
import Gallery from './pages/Gallery';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Gallery/>
      <Podcast/>
      <Footer/>
    </div>
  );
}

export default App;
