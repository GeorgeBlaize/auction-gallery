const Footer = () => {
  return (
    <footer className="bg-white py-8 mt-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-yellow-500">AuctionGallery</h2>
        <p className="text-xl">Bid. Win. Own.</p>
        <ul className="flex justify-center space-x-6 mt-4">
          <li><a href="#" className="text-gray-700 hover:text-black">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">Auctions</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">Categories</a></li>
          <li><a href="#" className="text-gray-700 hover:text-black">How it works</a></li>
        </ul>
        <p className="text-gray-500 mt-4">© 2025 AuctionHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;