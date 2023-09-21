export function LocationInfo({ venue }) {
  return (
    <div>
      <h3>Geographical data:</h3>
      <p>Continent: {venue.location?.continent}</p>
      <p>Latitude: {venue.location?.lat}</p>
      <p>Longitude: {venue.location?.lng}</p>
    </div>
  );
}
