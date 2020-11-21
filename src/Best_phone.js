import React from "react";
import { Best_p } from "./Best_p";
import "./App.css";

export const Best_phone = () => {
  return (
    <div className="row box ">
      <div className="col=md-12 ">
        <div className="row box_body">
          <div className="col-md-12">
            <div className="row ">
              <div className=" col-md-4">
                {Best_p.map((k, i) => {
                  return (
                    <div key={i}>
                      <img
                        src={k.src}
                        class="img-responsive"
                        alt="Cinque Terre"
                      ></img>
                      {(k.title, k.text)}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
