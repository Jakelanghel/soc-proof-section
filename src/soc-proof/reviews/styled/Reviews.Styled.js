import styled from "styled-components";

export const StyledReviews = styled.div`
  background-color: var(--light-magenta);
  text-align: center;
  border-radius: 10px;
  padding: 0.75rem 0;

  .container-stars {
    margin-bottom: 0.75rem;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .star-icon {
    width: 15px;
  }

  .ratings {
    font-weight: 700;
  }

  @media screen and (min-width: 1200px) {
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;

    .container-stars {
      margin: 0;
    }
  }
`;
