import React,{ useState } from "react";
import "./CoverCard.scss";
import styled from "styled-components";

const CoverCard = ({ product,newStyles}) => {
  
  const valueWithDiscount = (product.cover * (100 - product.discount)) / 100;
  return (
    <Cover className={newStyles}>
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
            <h3>{product.discount}%off</h3>
          </div>
          <div className="cover__prices__discounts__gift">
            <p>+ ${product.consumible} </p>
            <p>consumibles</p>
          </div>
        </div>
        <div className="cover__prices__total">
          <div className="cover__prices__total__noDiscount">
            <h4>${product.cover}</h4>
          </div>
          <div className="cover__prices__total__total">
            <h2>${valueWithDiscount}</h2>
          </div>
        </div>
      </div>
    </Cover>
  );
};

export default CoverCard;

const Cover = styled.div`

`;