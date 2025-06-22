import { useState, useEffect } from "react";
import EntryForm from "./components/EntryForm";
import EntryCard from "./components/EntryCard";

const defaultEntries = [
  {
    id: 1,
    location: "Kyoto",
    country: "Japan",
    arrivalDate: "2022-05-12",
    departureDate: "2022-05-20",
    description: "Kyoto was beautiful in spring!",
    images: ["/images/kyoto1.jpg", "/images/kyoto2.jpg", "images/kyoto3.jpg"]
  },
  {
    id: 2,
    location: "Barcelona",
    country: "Spain",
    arrivalDate: "2022-09-02",
    departureDate: "2022-09-10",
    description: "Loved the Gaudí architecture!",
    images: ["/images/barcelona1.jpg", "/images/barcelona2.jpg", "/images/barcelona3.jpg"]
  },
  {
    id: 3,
    location: "Paris",
    country: "France",
    arrivalDate: "2023-06-05",
    departureDate: "2023-06-18",
    description: "Eiffel Tower at night is magical!",
    images: ["/images/paris1.jpg", "/images/paris2.jpg", "/images/paris3.jpg"]
  }
];

export default function App() {
  // Load from localStorage or default entries on first render
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("travelEntries");
    return saved ? JSON.parse(saved) : defaultEntries;
  });
  const [editingEntry, setEditingEntry] = useState(null);  

  // Save to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("travelEntries", JSON.stringify(entries));
  }, [entries]);

  const addOrUpdateEntry = (entry) => {
    if (entry.id) {
      setEntries(entries.map(e => e.id === entry.id ? entry : e));
    } else {
      setEntries([...entries, { ...entry, id: Date.now() }]);
    }
    setEditingEntry(null);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const editEntry = (entry) => {
    setEditingEntry(entry);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="app-container">
      <h1>My Travel Journal</h1>
      <EntryForm
        key={editingEntry?.id || "new"}
        onSubmit={addOrUpdateEntry}
        initialData={editingEntry}
      />
      <div className="entry-list">
        {entries.map(entry => (
          <EntryCard
            key={entry.id}
            entry={entry}
            onDelete={() => deleteEntry(entry.id)}
            onEdit={() => editEntry(entry)}
          />
        ))}
      </div>
    </div>
  );
}
