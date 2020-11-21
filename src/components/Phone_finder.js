import React from "react";
import { phones } from "../file";
import "../App.css";

export const Phone_finder = () => {
  return (
    <div className="row box ">
      <div className="col=md-12 ">
        <div className="row phone_finder ">
          <div className="col-md-12 finder">
            Phone finder
            <i className="glyphicon glyphicon-search finder_search_glyphicon"></i>
          </div>
        </div>
        <div className="row box_body">
          <div className="col-md-12">
            <ul className="edit arrange">
              {phones.map((k, i) => {
                return <li key={i}>{k.title}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="row phone-finder-btm">
          <div className="col-md-12 btm_finder">
            All Brands,,,,,,Rumors Mills
          </div>
        </div>
      </div>
    </div>
  );
};
