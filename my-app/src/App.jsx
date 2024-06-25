import './App.css';

import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { Profile } from './Components/Profile/Profile';
import { Social } from './Components/Social/Social';

export function App() {
  return (
    <>
      <Navbar />

      <Profile />

      <Social />

      <Footer />
    </>
  );
}