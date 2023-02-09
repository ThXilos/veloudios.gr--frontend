import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        <h1 className="hero-title">Plumbing services on Tinos Island.</h1>
        <div className="sub-heading">
          <p className="hero-text">
            <span className="secondary-subtitle">
              <span className="brag-title">Supporting 50+ businesses</span>{" "}
              around the island.
            </span>
          </p>
          <p className="btn">Get in touch</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("assets/images/hero.jpg");
  background-size: cover;
  background-position: 20% 65%;
  height: 80vh;
  color: #fff;

  .hero-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 37rem;
  }

  .hero-title {
    display: block;
    font-size: 4.5rem;
    font-weight: 700;
    letter-spacing: -0.5px;
  }

  .sub-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-text {
    font-size: 3rem;
    letter-spacing: -0.5px;
    opacity: 0.9;
    text-align: center;
  }

  .brag-title {
    font-weight: 700;
    color: #21ceb9;
    opacity: 1;
  }

  .btn {
    display: inline-block;
    background-color: #21ceb9;
    padding: 2rem 6rem;
    border-radius: 9px;
    font-size: 2rem;
    transition: all 0.3s;
  }

  .btn:hover {
    cursor: pointer;
    background-color: #4dd8c7;
  }

  @media (max-width: 1300px) {
    .hero-container {
      gap: 34rem;
    }
  }
  @media (max-width: 1000px) {
  }

  @media (max-width: 835px) {
  }

  @media (max-width: 600px) {
    background-position: center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
      url("assets/images/hero.jpg");

    .hero-container {
      padding-top: 10%;
      gap: 10rem;
    }

    .hero-title {
      font-size: 5rem;
      width: 80%;
      text-align: left;
    }

    .sub-heading {
      width: 80%;
      align-self: center;
    }

    .hero-text {
      text-align: left;
    }

    .secondary-subtitle {
      font-size: 3rem;
    }
  }

  @media (orientation: landscape) and (max-width: 1081px) {
  }

  @media (orientation: landscape) and (max-width: 915px) {
  }
`;

export default Hero;
