export function LocationInfo({ venue }) {
  return (
    <div>
      <h3>Location:</h3>
      <p>Address: {venue.location?.address}</p>
      <p>City: {venue.location?.city}</p>
      <p>Continent: {venue.location?.continent}</p>
      <p>Country: {venue.location?.country}</p>
      <p>Latitude: {venue.location?.lat}</p>
      <p>Longitude: {venue.location?.lng}</p>
      <p>ZIP: {venue.location?.zip}</p>
    </div>
  );
}
