import React from "react";
import './Sports.css'

export const Sports = () => {
  return (
    <div className="div">
      <div className="available-sport">
        <div className="title">
          <div className="rectangle" />
          <div className="text-wrapper">Available Sports</div>
        </div>
        <div className="cricket">
            <div className="overlap">
              <img className="sport" alt="Sport" src="/img/sport1-2.png" />
            </div>
            <div className="overlap-group">
              <img className="img" alt="Sport" src="/img/sport1-3.png" />
            </div>
            <div className="sport-wrapper">
              <img className="sport" alt="Sport" src="/img/sport1-4-1.png" />
            </div>
            <div className="img-wrapper">
              <img className="sport-2" alt="Sport" src="/img/sport1-5-1.png" />
            </div>
            <div className="overlap-2">
              <img className="sport-3" alt="Sport" src="/img/sport1-4.png" />
            </div>
            <div className="overlap-3">
              <img className="sport-3" alt="Sport" src="/img/sport1-5.png" />
            </div>
            <div className="overlap-4">
              <img className="sport-4" alt="Sport" src="/img/sport1-6.png" />
            </div>
            <div className="overlap-5">
              <img className="sport-3" alt="Sport" src="/img/sport1-7.png" />
            </div>
            <div className="overlap-group-2">
              <img className="sport-4" alt="Sport" src="/img/sport1-8.png" />
            </div>
            <div className="overlap-6">
              <img className="sport" alt="Sport" src="/img/sport1-1.png" />
            </div>
            <div className="text-wrapper-2">Cricket</div>
            <div className="text-wrapper-3">Basketball</div>
            <div className="text-wrapper-4">Football</div>
            <div className="text-wrapper-5">Chess</div>
            <div className="text-wrapper-6">Soccer</div>
            <div className="text-wrapper-7">Table tennis</div>
            <div className="text-wrapper-8">Tennis</div>
            <div className="text-wrapper-9">Badminton</div>
            <div className="text-wrapper-10">Hockey</div>
            <div className="text-wrapper-11">Volleyball</div>
          </div>
        {/* Add other sports here */}
      </div>
    </div>
  );
};


export default Sports();