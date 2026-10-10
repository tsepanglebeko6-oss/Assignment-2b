import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Attractions from './pages/Attractions';
import AttractionDetails from './pages/AttractionDetails';
import Enquiry from './pages/Enquiry';
import attractions from './data/attractions';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [selectedId, setSelectedId] = useState(null);
  const [enquiryDestinationId, setEnquiryDestinationId] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, selectedId]);

  function goHome() {
    setSelectedId(null);
    setPage('home');
  }

  function goAttractions() {
    setSelectedId(null);
    setPage('attractions');
  }

  function goEnquiry(destinationId) {
    setEnquiryDestinationId(destinationId ? String(destinationId) : '');
    setSelectedId(null);
    setPage('enquiry');
  }

  function handleNavigate(nextPage) {
    if (nextPage === 'home') {
      goHome();
      return;
    }
    if (nextPage === 'attractions') {
      goAttractions();
      return;
    }
    goEnquiry();
  }

  function handleSelectAttraction(id) {
    setSelectedId(id);
    setPage('details');
  }

  const selectedAttraction = attractions.find((item) => item.id === selectedId);
  const navPage = page === 'details' ? 'attractions' : page;

  return (
    <div className="app-shell">
      <Navbar currentPage={navPage} onNavigate={handleNavigate} />
      {page === 'home' && (
        <Home onNavigate={handleNavigate} onSelectAttraction={handleSelectAttraction} />
      )}
      {page === 'attractions' && <Attractions onSelectAttraction={handleSelectAttraction} />}
      {page === 'details' && (
        <AttractionDetails
          attraction={selectedAttraction}
          onBack={goAttractions}
          onEnquire={goEnquiry}
        />
      )}
      {page === 'enquiry' && <Enquiry presetDestinationId={enquiryDestinationId} />}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
