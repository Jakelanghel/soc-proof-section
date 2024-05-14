import styled from "styled-components";

export const StyledCustomerReview = styled.div`
  background-color: var(--very-dark-magenta);
  color: var(--white);
  padding: 2.25rem;
  border-radius: 8px;

  .container-profile {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .profile-img {
    width: 50px;
    border-radius: 50%;
  }

  .name {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 5px;
  }

  .tag {
    font-size: 1rem;
    font-weight: 500;
    color: var(--pink);
  }

  .review-txt {
    font-size: 1.1rem;
    line-height: 1.5rem;
    font-weight: 500;
    color: var(--light-magenta);
  }
`;
