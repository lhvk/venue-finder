import { deleteVenue } from "../../../api/delete";
import { Button } from "../../../components/Buttons";

export function UserVenues(venueData, setVenueData, token) {
  async function handleDeleteVenue(venueId) {
    if (window.confirm("Are you sure you want to delete this venue?")) {
      try {
        await deleteVenue(venueId, token);

        setVenueData((prevData) => {
          return prevData.filter((venue) => venue.id !== venueId);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <h4>Your venues</h4>
      {venueData?.map((venue) => (
        <div key={venue.id}>
          <p>{venue.id}</p>
          <Button onClick={() => handleDeleteVenue(venue.id)}>
            Delete venue
          </Button>
        </div>
      ))}
    </>
  );
}
