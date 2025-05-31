import styled from "styled-components";
import RatingStars from "./RatingStars";

const ReviewContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const Review = styled.p`
  font-weigth: bold;
  margin: 0 0 0.25rem;
`;
const Comment = styled.p`
  margin: 0;
`;

const ReviewList = () => {
  const reviews = [
    { rating: 4, Comment: "Chegou rápido e o aroma é maravilhoso." },
    { rating: 5, Comment: "Ótimo custo-benefício, recomendo!" },
    { rating: 4, Comment: "Muito bonita, só achei pequena." },
  ];

  return (
    <div>
      {reviews.map((review, index) => (
        <ReviewContainer key={index}>
          <RatingStars rating={review.rating} />
          <Comment>{review.Comment}</Comment>
        </ReviewContainer>
      ))}
    </div>
  );
};

export default ReviewList;
