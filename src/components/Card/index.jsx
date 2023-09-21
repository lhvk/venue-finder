import { StarRating } from "../StarRating";
import {
  Container,
  Content,
  ButtonContainer,
  ReviewsContainer,
  Subtitle,
  TagContainer,
  Title,
  CardFooter,
  CardVenueLink,
} from "./styled";
import { PLACEHOLDER_IMG } from "../../config";

export function Card({
  title,
  subtitle,
  tag,
  bgImage,
  totalReviews,
  ratingAverage,
  id,
}) {
  function truncateText(text, maxWords) {
    const words = text.split(" ");

    if (words.length <= maxWords) {
      return text;
    } else {
      const truncatedWords = words.slice(0, maxWords);
      return truncatedWords.join(" ") + " ...";
    }
  }

  return (
    <Container $bgImage={bgImage || PLACEHOLDER_IMG}>
      {tag && (
        <TagContainer>
          <span>{tag}</span>
        </TagContainer>
      )}
      <Content>
        <div>
          {(title || subtitle) && (
            <>
              <Title>{truncateText(title, 5)}</Title>
              <Subtitle>{truncateText(subtitle, 10)}</Subtitle>
            </>
          )}
          <CardFooter>
            <StarRating
              totalReviews={totalReviews}
              ratingAverage={ratingAverage}
            />
            <ButtonContainer>
              <CardVenueLink
                $py="5px"
                $px="20px"
                to={`/venue/${id}`}>
                view
              </CardVenueLink>
            </ButtonContainer>
          </CardFooter>
        </div>
      </Content>
    </Container>
  );
}
