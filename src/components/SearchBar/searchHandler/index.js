export function searchHandler(venues, setSearchResult) {
  function handleChange(e) {
    const value = e.target.value.toLowerCase();

    const results = venues.filter((venue) => {
      const name = venue.name.toLowerCase().includes(value);
      const country = venue.location?.country.toLowerCase().includes(value);
      const city = venue.location?.city.toLowerCase().includes(value);

      return name || country || city;
    });

    setSearchResult({
      query: e.target.value,
      list: results,
    });
  }

  return handleChange;
}
