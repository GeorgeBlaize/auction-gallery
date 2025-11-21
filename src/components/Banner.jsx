const Banner = () => {
  return (
    <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('https://i.postimg.cc/hjMsWLjb/Banner-min.jpg')" }}
>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-4 py-16 text-white">
        <h2 className="text-4xl font-bold">Bid on Unique Items from Around the World</h2>
        <p className="mt-2">Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
        <button className="mt-4 bg-white text-black px-6 py-2 rounded-full">Explore Auctions</button>
      </div>
    </div>
  );
};

export default Banner;