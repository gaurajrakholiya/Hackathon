import React from "react";
import "./mainpart.css";

export const MainPart = () => {
  return (
    <>
    <div className="main-part">
      <div className="background-3">
        <div className="content">
        <img className="photo" alt="Phot" src="./img/photo.png" />
          <div className="content">
            <button className="login-button">
              <div className="div-wrapper">
                <div className="text-wrapper-14">Sign Up</div>
              </div>
            </button>
            <button className="button">
              <div className="overlap-group-4">
                <div className="text-wrapper-15">Login</div>
              </div>
            </button>
            <p className="it-s-never-been">
              <span className="text-wrapper-16">
                It’s never been easier to{" "}
              </span>
              <span className="text-wrapper-17">schedule</span>
              <span className="text-wrapper-16">, </span>
              <span className="text-wrapper-17">manage</span>
              <span className="text-wrapper-16">
                {" "}
                and run great practices that keep kids happy and wanting more.
                Choose from a range of ready-made{" "}
              </span>
              <span className="text-wrapper-17">practice plans</span>
              <span className="text-wrapper-16">
                , perfect for your players age and stage
              </span>
            </p>
            <p className="welcome-to-coach">
              Welcome to <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Coach Mate
            </p>
          </div>
        </div>
        </div>
      </div>
    
    </>
  );
};


export default MainPart()
