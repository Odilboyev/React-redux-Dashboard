import React, { useRef, useState } from "react";

// redux
import { useSelector } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";
import SwiperWrapper from "./swiperWrapper";

// install Swiper modules
SwiperCore.use([Navigation]);


const SwiperCard = () => {

  const cards = useSelector(state => state.cards);

  const [activei, setActivei] = useState(0);
  const card = activei;
  
  return (
    <SwiperWrapper>
      <Swiper
        navigation={true}
        onSlideChange={(e) => {
          setActivei(e.activeIndex);
        }}
      >
        {cards.map((v, i) => {
          return (
            <SwiperSlide key={i}>
              {" "}
              <div className={`plastik_card ${v.classColor}`}>
                <div className="m-4">
                  <div className="d-flex justify-content-between">
                    <div className="p">
                      <p className="cloudcash">cloudcash</p>
                      <p className="cloudcashsm">PREMIUM ACCOUNT</p>
                    </div>
                    <p>
                      <img
                        className="masterCard"
                        src="https://www.mastercard.ru/content/dam/mccom/global/logos/logo-mastercard-mobile.svg"
                        alt=""
                      />
                    </p>
                  </div>
                  <div className="simCard">
                    <img
                      className="simCard"
                      src="https://previews.123rf.com/images/miceking/miceking1603/miceking160300029/53109625-chip-of-credit-card-sim-card-chip.jpg"
                      alt=""
                    />
                  </div>
                  <p className="card_codes">
                    {v.number1} <span>****</span> <span>****</span> {v.number2}
                  </p>

                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <p className="cloudcashsm mb-0 pb-0 mt-2">Card holder</p>
                      <p className="cloudcashmd">{v.card_owner}</p>
                    </div>
                    <div>
                      <p className="cloudcashsm mb-0 pb-0 mt-2">Expire date</p>
                      <p className="cloudcashmd">{v.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrapper>
  );
};

export default SwiperCard;
