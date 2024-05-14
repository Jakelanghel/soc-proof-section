import Reviews from "./reviews/Reviews";
import CustomerReview from "./customer-review/CustomerReview";
import { StyledSocProof } from "./styled/SocProof.Styled";
import { data } from "./data/data";

const RenderedCustomerReviews = data.map((r) => (
  <CustomerReview key={r.name} img={r.img} name={r.name} txt={r.txt} />
));

const SocProof = () => {
  return (
    <StyledSocProof>
      {/* <div> */}
      <div className="container-intro">
        <h1>10,000+ of our users love our products.</h1>

        <p className="intro-txt">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>

      <div className="container-reviews">
        <Reviews txt="Reviews" />
        <Reviews txt="Report Guru" />
        <Reviews txt="BestTech" />
      </div>
      {/* </div> */}

      <div className="container-customer-reviews">
        {RenderedCustomerReviews}
      </div>
    </StyledSocProof>
  );
};

export default SocProof;
