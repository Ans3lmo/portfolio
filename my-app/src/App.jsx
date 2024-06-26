import './App.css';

import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Home } from './Components/Home/Home';

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}