🖼️ Auction Gallery

A modern, responsive Auction Web Application built with React.js, Vite, and Tailwind CSS.
Users can discover, browse, and bid on rare collectibles, luxury goods, and vintage items.
The UI is inspired by the provided Figma prototype, ensuring a clean and intuitive experience.

This project demonstrates strong React fundamentals, including component composition, state management, local JSON data, toast notifications, and dynamic favorite item updates.

🚀 Live Demo

(Add link here if deployed)

📌 Overview

Auction Gallery includes:

A responsive Navbar

A Hero Banner with button and background image

An Auctions Table required by your challenge

A Favorites Sidebar with dynamic totals

Stylish components built using Tailwind CSS

Notifications powered by React-Toastify

Users can browse items, add them to favorites, and manage them with smooth interactions.

✨ Features
🧭 Navbar

Responsive menu

Links to Home, Auctions, Categories, How it Works

User profile icon via React-Icons

🎯 Banner (Hero Section)

Background image

Headline + description

CTA button: Explore Auctions

🏆 Active Auctions

Displays items in a table layout (challenge requirement)

Shows:

Item image

Title

Current bid price

Time left

Favorite button

Favorite button:

Turns red

Disables after clicking

Triggers a toast notification

❤️ Favorites Sidebar

Shows all favorited items with:

Image

Title

Price

Bid count

Remove button

Dynamically updates Total Bid Amount

Removing an item deducts its bid amount

🔔 Toast Notifications

Displays a success toast when an item is added to favorites

👣 Footer

App logo

Tagline

Quick navigation links

Copyright

🛠️ Technologies Used
Technology	Purpose
React.js	UI components and state handling
Vite	Lightning-fast dev server
Tailwind CSS	Styling with utility classes
React-Toastify	Toast notifications
React-Icons	Icons for UI elements
JSON Data	Local item data
📂 Folder Structure

```
auction-gallery/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── images/         # Item and banner images
│   │   └── screenshots/    # README screenshots
│   ├── components/
│   │   ├── ActiveAuctions.jsx
│   │   ├── Banner.jsx
│   │   ├── Favorites.jsx
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── bidItems.json
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```
📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/auction-gallery.git
cd auction-gallery

2️⃣ Install dependencies
npm install

3️⃣ Add images

Place all images in:

src/assets/images/


Example:

banner-bg.jpg

leica.jpg

gibson.jpg

If using screenshots:

src/assets/screenshots/

4️⃣ Run the development server
npm run dev


Visit: http://localhost:5173

5️⃣ Build for production
npm run build

6️⃣ Preview production build
npm run preview

🧪 Interacting with the App

Browse all auctions (displayed in table form)

Click the heart icon to favorite an item

Heart becomes red & disabled

Item immediately appears in the Favorites Sidebar

Removing an item updates the Total Bid Amount

Toast notifications confirm interactions

🗃️ Project Guidelines
✔️ Commits

At least 8 meaningful commits, covering setup, components, styling, and features.

✔️ Styling

Fully responsive

Clean typography

Tailwind utility classes

Avoid overly bright colors

✔️ Data

bidItems.json must include:

id, title, description, currentBidPrice, timeLeft, bidsCount, image

✔️ Accessibility

Basic semantic HTML + ARIA attributes.

🤝 Contributing

Contributions are welcome!

fork → feature branch → commit → push → pull request


Example:

git checkout -b feature/new-feature
git commit -m "Add new feature"
git push origin feature/new-feature

📄 License

This project is licensed under the MIT License.

© 2025 AuctionHub. All rights reserved.
