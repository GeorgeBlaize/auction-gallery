# 🖼️ Auction Gallery

A modern, responsive Auction Web Application built with **React.js**, **Vite**, and **Tailwind CSS**.  
Users can discover, browse, and bid on rare collectibles, luxury goods, and vintage items.  
The UI is inspired by the provided Figma prototype, ensuring a clean and intuitive experience.

This project demonstrates strong React fundamentals, including component composition, state management, JSON data handling, toast notifications, and dynamic favorite item updates.

---

## 🚀 Live Demo
*(solid-prison.surge.sh)*

---

## 📌 Overview

Auction Gallery includes:

- A responsive Navbar  
- A Hero Banner with CTA button and background image  
- An Auctions Table (challenge requirement)  
- A Favorites Sidebar with dynamic totals  
- Components styled using **Tailwind CSS**  
- Notifications powered by **React-Toastify**  

Users can browse items, add favorites, and manage them with smooth interactions.

---

## ✨ Features

### 🧭 Navbar
- Fully responsive  
- Links: Home, Auctions, Categories, How it Works  
- Profile icon via React-Icons  

### 🎯 Banner (Hero Section)
- Background image  
- Headline & description  
- **Explore Auctions** button  

### 🏆 Active Auctions
Displays items in a table layout showing:
- Item image  
- Title  
- Current bid price  
- Time left  
- Favorite button  

**Favorite button behavior:**
- Turns red  
- Gets disabled  
- Shows a toast notification  

### ❤️ Favorites Sidebar
Shows favorited items with:
- Image  
- Title  
- Price  
- Bid count  
- Remove button  

**Dynamic updates:**
- Total Bid Amount updates automatically  
- Removing an item deducts its amount instantly  

### 🔔 Toast Notifications
- Success notification on adding to favorites  

### 👣 Footer
- Logo  
- Tagline  
- Navigation links  
- Copyright  

---

## 🛠️ Technologies Used

| Technology      | Purpose                          |
|-----------------|----------------------------------|
| React.js        | UI components & state handling   |
| Vite            | Fast development server          |
| Tailwind CSS    | Utility-first styling            |
| React-Toastify  | Toast notifications              |
| React-Icons     | Icons for UI elements            |
| JSON Data       | Local data source                |

---

## 📂 Folder Structure

```
auction-gallery/
├── public/
│ └── vite.svg
├── src/
│ ├── assets/
│ │ ├── images/ # Item and banner images
│ │ └── screenshots/ # README screenshots
│ ├── components/
│ │ ├── ActiveAuctions.jsx
│ │ ├── Banner.jsx
│ │ ├── Favorites.jsx
│ │ ├── Footer.jsx
│ │ └── Navbar.jsx
│ ├── data/
│ │ └── bidItems.json
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
│ └── ...
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

yaml
Copy code

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/auction-gallery.git
cd auction-gallery
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Add images
Place all images in:

bash
Copy code
src/assets/images/
Examples:

banner-bg.jpg

leica.jpg

gibson.jpg

Screenshots go inside:

bash
Copy code
src/assets/screenshots/
4️⃣ Start the development server
bash
Copy code
npm run dev
Visit: http://localhost:5173

5️⃣ Build for production
bash
Copy code
npm run build
6️⃣ Preview final build
bash
Copy code
npm run preview
🧪 Interacting with the App
Browse auctions displayed in a table format

Click the heart icon to favorite an item

Heart turns red & disabled

Item appears in the Favorites Sidebar

Removing an item updates the total

Toast notifications appear on interaction

🗃️ Project Guidelines
✔️ Commits
Minimum 8 meaningful commits including setup, components, styling, and features.

✔️ Styling
Fully responsive

Clean typography

Tailwind utility classes

Avoid overly bright colors

✔️ Data
bidItems.json must contain:

arduino
Copy code
id, title, description, currentBidPrice, timeLeft, bidsCount, image
✔️ Accessibility
Semantic HTML

Basic ARIA compatibility

🤝 Contributing
Fork the repository

Create a feature branch

bash
Copy code
git checkout -b feature/new-feature
Commit changes

Push your branch

Submit a pull request

📄 License
This project is licensed under the MIT License.

© 2025 AuctionHub. All rights reserved.
