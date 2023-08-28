import { Icon } from "../Icon";

export function StarRating(ratingAverage, totalReviews) {
  const StarEmpty = () => (
    <div>
      <Icon
        id="star-full-icon"
        fill="#919191"
      />
    </div>
  );

  const FullStar = () => (
    <div>
      <Icon
        id="star-full-icon"
        fill="#FFCC00"
      />
    </div>
  );

  const HalfStar = () => (
    <div>
      <Icon
        id="star-half-icon"
        fill="#FFCC00"
      />
    </div>
  );

  return (
    <>
      {ratingAverage === 0 && (
        <>
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
        </>
      )}
      {ratingAverage === 0.5 && (
        <>
          <HalfStar />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
        </>
      )}
      {ratingAverage === 1 && (
        <>
          <FullStar />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
        </>
      )}
      {ratingAverage === 1.5 && (
        <>
          <FullStar />
          <HalfStar />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
        </>
      )}
      {ratingAverage === 2 && (
        <>
          <FullStar />
          <FullStar />
          <StarEmpty />
          <StarEmpty />
          <StarEmpty />
        </>
      )}
      {ratingAverage === 2.5 && (
        <>
          <FullStar />
          <FullStar />
          <HalfStar />
          <StarEmpty />
          <StarEmpty />
        </>
      )}
      {ratingAverage === 3 && (
        <>
          <FullStar />
          <FullStar />
          <FullStar />
          <StarEmpty />
          <StarEmpty />
        </>
      )}
      {ratingAverage === 3.5 && (
        <>
          <FullStar />
          <FullStar />
          <FullStar />
          <HalfStar />
          <StarEmpty />
        </>
      )}
      {ratingAverage === 4 && (
        <>
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
          <StarEmpty />
        </>
      )}
      {ratingAverage === 4.5 && (
        <>
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
          <HalfStar />
        </>
      )}
      {ratingAverage === 5 && (
        <>
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
          <FullStar />
        </>
      )}

      <span className="total-reviews">
        {`${totalReviews === 1 ? "1 review" : `${totalReviews} reviews`}`}
      </span>
    </>
  );
}
