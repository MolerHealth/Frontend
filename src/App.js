import Navbar from './navbar/Navbar';
import LandingPage from './landingpage/LandingPage';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <LandingPage />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
