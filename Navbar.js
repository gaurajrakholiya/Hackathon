import React from "react";
import './App.css'

export const NavigationBar = () => {
  return (
    <div className="nav">
      <div className="overlap-10">
        <div className="overlap-11">
          <div className="selected-menu" />
          <div className="text-wrapper-18">Home</div>
        </div>
        <div className="text-wrapper-19">About</div>
        <div className="text-wrapper-20">Available Sports</div>
        <div className="text-wrapper-21">Manual</div>
        <button className="login-button-2">
          <div className="overlap-group-4">
            <div className="text-wrapper-15">Login</div>
          </div>
        </button>
        <div className="logo">
          <div className="overlap-12">
            <div className="c-ACHMATE">C&nbsp;&nbsp; ACHMATE</div>
            <img className="ball" alt="Ball" src="/img/ball-2.png" />
          </div>
          <div className="overlap-13">
            <img className="vector" alt="Vector" src="/img/vector-2.png" />
            <img className="vector-2" alt="Vector" src="/img/vector-3.png" />
            <img className="vector-3" alt="Vector" src="/img/vector-1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default NavigationBar();