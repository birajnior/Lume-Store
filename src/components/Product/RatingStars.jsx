import { StarFill, Star, StarHalf } from "react-bootstrap-icons";
import styled from "styled-components";

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
  color: #ffb700;

  span {
    color: #333;
    font-size: 0.9rem;
    margin-left: 8px;
  }
`;

const RatingStars = ({ rating = 0, max = 5, totalReviews }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <RatingWrapper>
      {[...Array(fullStars)].map((_, i) => (
        <StarFill key={`full-${i}`} />
      ))}

      {hasHalfStar && <StarHalf key="half" />}

      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} style={{ color: "#ccc" }} />
      ))}

      {totalReviews !== undefined && (
        <span>
          ({totalReviews} {totalReviews === 1 ? "avaliação" : "avaliações"})
        </span>
      )}
    </RatingWrapper>
  );
};

export default RatingStars;
