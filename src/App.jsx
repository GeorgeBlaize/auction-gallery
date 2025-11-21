import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ActiveAuctions from './components/ActiveAuctions';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import bidItems from './data/bidItems.json';
import { toast } from 'react-toastify';

function App() {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (item) => {
    if (!favorites.some(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
      toast.success(`${item.title} added to favorites!`);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const totalBidAmount = favorites.reduce((sum, item) => sum + item.currentBidPrice, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ActiveAuctions 
              items={bidItems} 
              favorites={favorites} 
              addToFavorites={addToFavorites} 
            />
          </div>
          <Favorites 
            favorites={favorites} 
            removeFromFavorites={removeFromFavorites} 
            totalBidAmount={totalBidAmount} 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;