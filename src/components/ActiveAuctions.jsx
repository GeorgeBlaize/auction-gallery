import { FaHeart } from 'react-icons/fa';

const ActiveAuctions = ({ items, favorites, addToFavorites }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800">Active Auctions</h3>
      <p className="text-gray-600 mb-4">Discover and bid on extraordinary items</p>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600">
              <th className="p-4">Items</th>
              <th className="p-4">Current Bid</th>
              <th className="p-4">Time Left</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => {
              const isFavorited = favorites.some(fav => fav.id === item.id);
              return (
                <tr key={item.id} className="border-t">
                  <td className="p-4 flex items-center">
                    <img src={item.image} alt={item.title} className="w-12 h-12 object-cover mr-4" />
                    {item.title}
                  </td>
                  <td className="p-4">${item.currentBidPrice.toLocaleString()}</td>
                  <td className="p-4">{item.timeLeft}</td>
                  <td className="p-4">
                    <button
                      onClick={() => addToFavorites(item)}
                      disabled={isFavorited}
                      className={`text-xl ${isFavorited ? 'text-red-500 cursor-not-allowed' : 'text-blue-500 hover:text-red-500'}`}
                    >
                      <FaHeart />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveAuctions;