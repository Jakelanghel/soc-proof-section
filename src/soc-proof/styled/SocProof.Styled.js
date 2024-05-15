import styled from "styled-components";

export const StyledSocProof = styled.main`
  padding: 3rem 1.5rem;
  max-width: 400px;
  margin: 0 auto;

  .container-intro {
    text-align: center;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    max-width: 350px;
    margin: 0 auto;
  }

  .intro-txt {
    font-weight: 500;
    max-width: 300px;
    line-height: 1.5rem;
    padding: 1rem 0;
    margin: 0 auto;
  }

  .container-reviews {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .container-customer-reviews {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 3rem 0;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    padding: 8rem;

    .sp-1 {
      margin-left: 3rem;
    }

    .sp-2 {
      margin-left: 6rem;
    }

    .mg-tp-1 {
      margin-top: 5rem;
    }

    .mg-tp-2 {
      margin-top: 10rem;
    }

    h1 {
      font-size: 2.75rem;
      margin: 0;
    }

    .container-intro {
      width: 50%;
      text-align: left;
    }

    .intro-txt {
      font-size: 1.1rem;
      max-width: 425px;
      line-height: 1.5rem;
      padding: 2rem 0;
      margin: 0;
    }

    .section-1 {
      display: flex;
      justify-content: space-between;
    }

    .container-reviews {
      width: 50%;
      gap: 1.5rem;
    }

    .container-customer-reviews {
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      margin: 0;
    }
  }
`;
