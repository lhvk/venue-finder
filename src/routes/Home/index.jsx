import SearchBar from "../../components/SearchBar";
import { HeroBanner } from "./styled";

export default function Home() {
  return (
    <main>
      <HeroBanner>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Venue Finder</h1>
            <span style={{ fontSize: "2rem" }}>
              The number one venue finder in the world
            </span>
            <SearchBar />
          </div>
        </div>
      </HeroBanner>
    </main>
  );
}
