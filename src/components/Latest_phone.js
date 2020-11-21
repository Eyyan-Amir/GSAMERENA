import React from "react";
import { Latest } from "../Latest";
import "../App.css";

export const Latest_phone = () => {
  return (
    <div className="row box ">
      <div className="col=md-12 ">
        <div className="row phone_finder ">
          <div className="col-md-12 finder">
            Latest phone
            <i className="glyphicon glyphicon-phone finder_search_glyphicon"></i>
          </div>
        </div>
        <div className="row box_body">
          <div className="col-md-12">
            <div className="row ">
              <div>
                {Latest.map((k, i) => {
                  return (
                    <div className=" col-md-4" key={i}>
                      <img
                        src={k.src}
                        class="img-responsive"
                        alt="Cinque Terre"
                      ></img>
                      {k.title}
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
