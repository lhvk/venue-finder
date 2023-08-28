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
} from "./styled";
import { ButtonNavLink } from "../Buttons";

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
    <Container $bgImage={bgImage}>
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
            <ReviewsContainer>
              {StarRating(totalReviews, ratingAverage)}
            </ReviewsContainer>
            <ButtonContainer>
              <ButtonNavLink
                $py="5px"
                $px="20px"
                to={`/venue/${id}`}>
                view
              </ButtonNavLink>
            </ButtonContainer>
          </CardFooter>
        </div>
      </Content>
    </Container>
  );
}
