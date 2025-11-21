import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">AuctionGallery</h1>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">Auctions</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">Categories</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">How it works</a></li>
        </ul>
        <FaUserCircle className="text-blue-500 text-2xl" />
      </div>
    </nav>
  );
};

export default Navbar;