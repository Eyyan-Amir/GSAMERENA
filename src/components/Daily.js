import React from "react";
import { Intrest } from "./Intrest";
import "../App.css";

export const Daily = () => {
  return (
    <div className="row box ">
      <div className="col=md-12 ">
        <div className="row daily_finder ">
          <div className="col-md-12 daily_intrest">
            <div className="row box_body">
              <div className="col-md-12">
                <table>
                  <tr className="tr_clr tr_wid">
                    <th className=" manege">Device</th>
                    <th>Daily Hits</th>
                  </tr>

                  <tbody>
                    {Intrest.map((k, i) => {
                      return (
                        <div key={i}>
                          <tr>
                            <td className="tr_wid ">
                              <td>{k.id}</td>
                            </td>
                            <td className="tr_wid ">
                              <td className="samg">{k.title}</td>
                            </td>
                            <td className="tr_wid ">
                              <td className="samg2"> {k.link}</td>
                            </td>
                          </tr>
                        </div>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>{" "}
            {/* <table>
              <tbody>
                {Intrest.map((k, i) => {
                  return (
                    <div key={i}>
                      {k.id},{k.title},{k.link}
                    </div>
                  );
                })}
              </tbody>
            </table> */}
          </div>
        </div>
        {/* <div className="row box_body">
          <div className="col-md-12">
            <table>
              <tr className="tr_clr tr_wid">
                <th className="dvi"></th>
                <th className=" manege">Device</th>
                <th className="dvi">Daily Hits</th>
              </tr>
              {/* <tr>
                <td className="tr_wid">1.</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
              <tr>
                <td className="tr_wid">2</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
              <tr>
                <td className="tr_wid">3</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
              <tr>
                <td className="tr_wid">4</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
              <tr>
                <td className="tr_wid">5</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
              <tr>
                <td className="tr_wid">6</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
              <tr>
                <td className="tr_wid">7</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
              <tr>
                <td className="tr_wid">8</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
              <tr>
                <td className="tr_wid">9</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
              <tr>
                <td className="tr_wid">10</td>
                <td className="tr_wid">Samsung Galaxy S8</td>
                <td className="tr_wid dvi">50,000</td>
              </tr>
            </table>
          </div>
        </div> */}
      </div>
    </div>
  );
};
