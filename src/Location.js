import { useState, useEffect } from 'react';

export default function Location() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
  }, []);

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({ latitude, longitude });
  }

  return (
    <>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </>
  );
}
