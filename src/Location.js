import { useState, useEffect } from 'react';

export default function Location() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(handlePositionReceived);

    return () => navigator.geolocation.clearWatch(watchId);
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
