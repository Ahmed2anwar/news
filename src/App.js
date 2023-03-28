import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';

import { Navbar } from './components/Navbar/Navbar';
import { NewsContextProvider } from './components/NewsContext';
import { NotFound } from './components/NotFound/NotFound';
import { Sports } from './components/Sports/Sports';
import { Fashion } from './components/Fashion/Fashion';
import { Foods } from './components/Foods/Foods';
import { Tech } from './components/Tech/Tech';


function App() {
  return (<>

    <Navbar />
    <NewsContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='sports' element={<Sports />} />
        <Route path='fashion' element={<Fashion />} />
        <Route path='tech' element={<Tech />} />
        <Route path='foods' element={<Foods />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </NewsContextProvider>
    <Footer />

  </>
  );
}

export default App;
