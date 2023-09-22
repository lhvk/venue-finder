import { Line } from "../../../components/Line";

export function Description({ venue, isMobile }) {
  return (
    <>
      <div>
        <h2>Description</h2>
        <article>{venue?.description}</article>
      </div>

      {isMobile && <Line />}
    </>
  );
}
