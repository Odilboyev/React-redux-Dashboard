import styled from "styled-components";

const SwiperWrapper = styled.div`
  .swiper-container {
    max-width: 300px;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    width: 100%;
  }
  .credit-card {
    height: 200px;
    background: linear-gradient(180deg, #197bbd 0%, #3391d0 100%);
    border-radius: 26px;
  }

  .masterCard{
        width: 80px;
        height: 40px;
        object-fit: cover;
        margin: 0;
        padding: 0;
    }
    .simCard{
        width: 40px;
        height: 40px;
        object-fit: cover;
        margin: 0;
        padding: 0;
        border-radius: 7px;
    }
    .card_codes {
        margin-top: 0 !important;
    }

  .plastik_card {
    .cloudcash {
      font-weight: bold;
      font-size: 16.7475px;
      line-height: 21px;
      color: white;
      margin-bottom: 0;
    }
  }
  .plastik_card {
    transition: 0.3s;
    &:hover {
      box-shadow: 0 14px 16px rgba(0, 0, 0, 0.56);
    }
    .cloudcash {
      font-weight: bold;
      font-size: 16.7475px;
      line-height: 21px;
      color: white;
      margin-bottom: 0;
    }
    .cloudcashsm {
      font-weight: bold;
      font-size: 8.11292px;
      line-height: 10px;
      color: rgba(255, 255, 255, 0.39);
    }
    .card_codes {
      font-weight: 500;
      font-size: 21.4918px;
      line-height: 27px;
      color: #ffffff;
      margin-top: 15px;
    }
    .cloudcashmd {
      font-weight: 500;
      font-size: 12.6167px;
      line-height: 15px;
      color: #ffffff;
      margin: 0;
      padding: 0;
    }
  }

  /* 
   */

  .plastik_card {
    border-radius: 26px;
    width: 100% !important;
    height: 207.17px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-right: 5px;
  }
  .plastik_card1 {
    background: linear-gradient(180deg, #197bbd 0%, #3391d0 100%);
  }
  .plastik_card2 {
    background-image: linear-gradient(
      to bottom,
      #046225,
      #07802c,
      #14a031,
      #26c033,
      #3be133
    );
  }
  .plastik_card3 {
    background-image: linear-gradient(
      to bottom,
      #4e550a,
      #6b780e,
      #879d13,
      #a4c419,
      #c0ed21
    );
  }
  .plastik_card4 {
    background-image: linear-gradient(
      to bottom,
      #550a0a,
      #761315,
      #981c1e,
      #bc2627,
      #e13030
    );
  }
  .plastik_card5 {
    background-image: linear-gradient(
      to bottom,
      #550a45,
      #781067,
      #9b188c,
      #be22b5,
      #e130e1
    );
  }
  .plastik_card6 {
    background-image: linear-gradient(
      to bottom,
      #0a5555,
      #127174,
      #1a8e96,
      #24abba,
      #30cae1
    );
  }
  .plastik_card7 {
    background-image: linear-gradient(
      to bottom,
      #000000,
      #1a191a,
      #2c2b2e,
      #3c3f43,
      #4c5459
    );
  }
  .plastik_card8 {
    background-image: linear-gradient(
      to bottom,
      #59284a,
      #68335a,
      #773e6b,
      #87497c,
      #96558e
    );
  }
  .photocard{
        padding: 10px;
        border-radius: 10px;
        box-shadow: 4px 5px 5px  gray;
        min-height:250px;
        background-color: white;
        margin: 10px;
        &:hover{
            box-shadow: 5px 7px 7px  gray;
        }
    }
`;

export default SwiperWrapper;
