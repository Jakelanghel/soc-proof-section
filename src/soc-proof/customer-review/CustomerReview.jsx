import propTypes from "prop-types";
import { StyledCustomerReview } from "./styled/CustomerReview.Styled";

const CustomerReview = (props) => {
  const { img, name, txt } = props;
  return (
    <StyledCustomerReview>
      <div className="container-profile">
        <img src={img} alt="profile image" className="profile-img" />
        <div className="container-name">
          <p className="name">{name}</p>
          <p className="tag">Verified Buyer</p>
        </div>
      </div>

      <p className="review-txt">{txt}</p>
    </StyledCustomerReview>
  );
};

CustomerReview.propTypes = {
  img: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  txt: propTypes.string.isRequired,
};

export default CustomerReview;
