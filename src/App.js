import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
// import Contact from './components/Contact/Contact'
import ScrollUp from './components/ScrollUp.js/ScrollUp'

function App() {
  return (
   <div className='App'>
        <Header />
        <main>
              <Home />
              <About />
              {/* <Contact /> */}
        </main>
        <Footer />
        <ScrollUp />
   </div>
  );
}

export default App;
