import styled from "styled-components";

export const StyledReviews = styled.main`
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
`;
