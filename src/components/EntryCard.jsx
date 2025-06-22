import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import { fetchWeather } from "../utils/weather"; // adjust path if needed

export default function EntryCard({ entry, onDelete, onEdit }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWeather() {
      const result = await fetchWeather(entry.location, entry.country);
      setWeather(result);
      setLoading(false);
    }

    getWeather();
  }, [entry.location, entry.country]);

  return (
    <div className="entry-card">
      <div className="images">
        {entry.images && entry.images.length > 0 && (
          <Carousel images={entry.images} />
        )}
      </div>
      <div className="description">
        <h2>
          {entry.location}, {entry.country}{" "}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${entry.location}, ${entry.country}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            [View on Map]
          </a>
        </h2>
        <p>
          <strong>Dates:</strong>{" "}
          {entry.arrivalDate} – {entry.departureDate}
        </p>

        {/* 🌤️ Weather display */}
        <p>
          <strong>Weather now:</strong>{" "}
          {loading ? "Loading..." : weather ? `${weather.temperature}°C, ${weather.description}` : "Unavailable"}
        </p>

        <p>{entry.description}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
