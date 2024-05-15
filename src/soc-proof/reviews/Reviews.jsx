import propTypes from "prop-types";
import star from "../../assets/icon-star.svg";

import { StyledReviews } from "./styled/Reviews.Styled";

const Reviews = (props) => {
  const { txt, className } = props;
  return (
    <StyledReviews className={className}>
      <div className="container-stars">
        <img src={star} alt="star" className="star-icon" />
        <img src={star} alt="star" className="star-icon" />
        <img src={star} alt="star" className="star-icon" />
        <img src={star} alt="star" className="star-icon" />
        <img src={star} alt="star" className="star-icon" />
      </div>
      <p className="ratings">{`Rated 5 Stars in ${txt}`}</p>
    </StyledReviews>
  );
};

Reviews.propTypes = {
  txt: propTypes.string.isRequired,
  className: propTypes.string,
};

export default Reviews;
