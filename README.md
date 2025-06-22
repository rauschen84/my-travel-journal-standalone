# 🌍 My Travel Journal

A simple, elegant React app to document and relive your travels. Create, view, update, and delete journal entries for locations you've visited — including dates, descriptions, and an image carousel to showcase your best moments.
Now enhanced with **real-time weather info** and a **clickable Google Maps link** for every location.
Deployed with Vercel — no setup needed!

## 🔗 Live Demo

👉 [Try the app here](https://my-travel-journal-standalone.vercel.app/)

---

## ✨ Features

- ✅ Add new travel entries with location, country, dates, and description
- 🌦️ Display **real-time weather** for each destination using OpenWeatherMap API
- 🗺️ Clickable **Google Maps** link for quick access to location
- 🖼️ Upload **multiple images** per entry with a built-in carousel
- ✏️ Edit existing entries
- 🗑️ Delete entries
- 💾 Persistent storage using `localStorage`
- 📅 Arrival and departure date tracking
- 🧼 Clean, responsive UI with custom CSS (no frameworks)

---

## 📁 Folder Structure

my-travel-journal/<br>
├── public/<br>
│ └── images/ # sample images<br>
├── src/<br>
│ ├── utils/<br>
│ │ └── weather.js<br>
│ ├── components/<br>
│ │ ├── Carousel.css<br>
│ │ ├── Carousel.jsx<br>
│ │ ├── EntryCard.jsx<br>
│ │ └── EntryForm.jsx<br>
│ ├── App.css<br>
│ ├── App.jsx<br>
│ └── main.jsx<br>
├── .gitignore<br>
├── README.md<br>
├── eslint.config.js<br>
├── index.html<br>
├── package-lock.json<br>
├── package.json<br>
└── vite.config.js<br>

---

## 🚀 Getting Started Locally

Clone the repo and run it locally:

```bash

git clone https://github.com/rauschen84/my-travel-journal-standalone.git
cd my-travel-journal-standalone
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.

---

## 🛠️ Built With

- React

- Vite

- OpenWeatherMap API

- Google Maps (via dynamic search URL)

- Vanilla CSS (no Tailwind, Bootstrap, or UI libraries)

- Vercel for deployment

---

## 💡 Future Enhancements

- 🕰️ Backend weather integration to show past weather data based on travel dates

- 🌗 Dark mode toggle

- 📍 Interactive embedded Google Maps view

---

## 👤 Author

Alexander Schultheiss / rauschen84
GitHub: @rauschen84

---

## 📄 License

This project is open source and free to use for educational and personal portfolio purposes.