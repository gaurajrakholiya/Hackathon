import React from "react";
import './App.css'
export const Coach = () => {
  return (
    <div className="coach">
      <div className="overlap-7">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-3">
          <img className="coach-2" alt="Coach" src="/img/coach-1-1.png" />
                <p className="alex-ferguson">
                  <span className="span">
                    Alex Ferguson
                    <br />
                  </span>
                  <span className="text-wrapper-12">(Football)</span>
                </p>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap-group-3">
          <p className="rahul-dravid-cricket">
                  <span className="span">
                    Rahul Dravid
                    <br />
                  </span>
                  <span className="text-wrapper-12">(Cricket)</span>
                </p>
                <img className="coach-3" alt="Coach" src="/img/coach-1-2-1.png" />
          </div>
        </div>
        <div className="overlap-8">
        <p className="kylin-munoz">
                <span className="span">
                  Kylin Munoz
                  <br />
                </span>
                <span className="text-wrapper-12">(Volleyball)</span>
              </p>
              <img className="coach-2" alt="Coach" src="/img/coach-1-2.png" />
        </div>
        <div className="title-2">
          <div className="rectangle-2" />
          <div className="text-wrapper-13">Our Best Coach</div>
        </div>
      </div>
    </div>
  );
};


export default Coach();