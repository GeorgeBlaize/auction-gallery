import { FaTimes } from 'react-icons/fa';

const Favorites = ({ favorites, removeFromFavorites, totalBidAmount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sticky top-4 w-full md:w-80">
      <h4 className="text-xl font-bold text-blue-500 mb-4">❤️ Favorite Items</h4>
      {favorites.length === 0 ? (
        <>
          <p className="text-gray-600">No favorites yet</p>
          <p className="text-gray-500 text-sm">Click the heart icon on any item to add it to your favorites</p>
        </>
      ) : (
        <ul className="space-y-4">
          {favorites.map(item => (
            <li key={item.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-10 h-10 object-cover mr-2" />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-600">${item.currentBidPrice.toLocaleString()} • Bids: {item.bidsCount}</p>
                </div>
              </div>
              <button onClick={() => removeFromFavorites(item.id)} className="text-gray-500 hover:text-red-500">
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 pt-4 border-t">
        <p className="font-bold">Total Bid Amount</p>
        <p className="text-2xl">${totalBidAmount.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Favorites;