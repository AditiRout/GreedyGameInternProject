import React, { useState, useEffect } from "react";
import "./Layout.css";
import axios from "axios";
import { FormState } from "./../config/FormProvider";
import Order from "../Order/Order";
import HideColumn from "../HideColumn/HideColumn";

const Layout = () => {
  const {
    setDetails,
    setEnd,
    setKeyword,
    setShow,
    setStart,
    start,
    end,
    show,
    keyword,
    details,
    listOrder,
    setApps,
    apps,
    showC,
    showClick,
    showDate,
    showFill,
    showImp,
    showName,
    showReq,
    showRes,
    showRev,
  } = FormState();

  const fetchData = async () => {
    console.log(start);
    console.log(end);
    try {
      const d = await axios.get(
        `http://go-dev.greedygame.com/v3/dummy/report?startDate=${start}&endDate=${end}`
      );
      const { data } = await axios.get(
        "http://go-dev.greedygame.com/v3/dummy/apps"
      );
      if (d && data) {
        setDetails(d["data"].data);
        setApps(data["data"]);
        setShow(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const filter = () => {
    if (keyword) {
      const appsById = apps.filter((a) => {
        return a.app_name.toLowerCase().includes(keyword);
      });
      console.log(appsById);
      const filterredDetails = appsById.map((item) => {
        return details.filter((i) => {
          return i.app_id.includes(item.app_id);
        });
      });
      console.log(filterredDetails[0]);
      setDetails(filterredDetails[0]);
    }
  };

  return (
    <div className="main">
      <h2>Analytics Page</h2>
      <div className="gap">
        Select Range:
        <input
          type="date"
          className="input"
          name="start"
          onChange={(e) => setStart(e.target.value)}
          value={start}
        />
        <input
          type="date"
          className="input"
          name="end"
          onChange={(e) => setEnd(e.target.value)}
          value={end}
        />
        <button className="btn" onClick={fetchData}>
          Search Data
        </button>
      </div>
      <div></div>
      <div className="gap row">
        Search here:
        <input
          type="text"
          value={keyword}
          placeholder="Enter App_Name"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="btn" onClick={filter}>
          Go
        </button>
        <div>
          <HideColumn />
        </div>
      </div>
      <div>
        <table>
          <Order />

          {show ? (
            <tbody>
              {details.map((data, index) => (
                <tr className="row" key={index}>
                  {!showDate && (
                    <td className="eachrow">
                      {data[`${Object.values(listOrder[0])}`]}
                    </td>
                  )}{" "}
                  {!showName && (
                    <td className="eachrow">
                      {
                        apps.filter((app) => {
                          return (
                            app.app_id ===
                            data[`${Object.values(listOrder[1])}`]
                          );
                        })[0].app_name
                      }
                    </td>
                  )}
                  {!showReq && (
                    <td className="eachrow">
                      {data[`${Object.values(listOrder[2])}`]}
                    </td>
                  )}
                  {!showRes && (
                    <td className="eachrow">
                      {data[`${Object.values(listOrder[3])}`]}
                    </td>
                  )}
                  {!showImp && (
                    <td className="eachrow">
                      {data[`${Object.values(listOrder[4])}`]}
                    </td>
                  )}
                  {!showClick && (
                    <td className="eachrow">
                      {data[`${Object.values(listOrder[5])}`]}
                    </td>
                  )}
                  {!showRev && (
                    <td className="eachrow">
                      {data[`${Object.values(listOrder[6])}`]}
                    </td>
                  )}
                  {!showFill && (
                    <td className="eachrow">
                      {((data.requests / data.responses) * 100).toFixed(3)}
                    </td>
                  )}
                  {!showC && (
                    <td className="eachrow">
                      {((data.clicks / data.impressions) * 100).toFixed(3)}
                    </td>
                  )}
                </tr>
              ))}{" "}
            </tbody>
          ) : (
            <></>
          )}
        </table>
      </div>
    </div>
  );
};

export default Layout;
