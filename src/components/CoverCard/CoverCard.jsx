import React from "react";
import "./CoverCard.scss";
const CoverCard = ({ product }) => {
  const valueWithDiscount = (product.cover * (100 - product.discount)) / 100;
  return (
    <div className="cover">
      <div className="cover__info">
        <div className="cover__info__image">
          <img src="/images/cover.png" alt="" />
        </div>
        <div>
          <div>
            <h3>Cover General</h3>
          </div>
          <div>Quedan 12</div>
        </div>
      </div>
      <div className="cover__prices">
        <div className="cover__prices__discounts">
          <div className="cover__prices__discounts__porcentage">
            <h3>25%off</h3>
          </div>
          <div className="cover__prices__discounts__gift">
            <p>+ $10.000 consumibles</p>
          </div>
        </div>
        <div className="cover__prices__total">
          <div className="cover__prices__total__noDiscount">
            <h4>$100.000</h4>
          </div>
          <div className="cover__prices__total__total">
            <h2>$75.000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverCard;
