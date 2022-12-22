import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [start, setStart] = useState("");
  const [show, setShow] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showReq, setShowReq] = useState(false);
  const [showRes, setShowRes] = useState(false);
  const [showImp, setShowImp] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [showRev, setShowRev] = useState(false);
  const [showFill, setShowFill] = useState(false);
  const [showC, setShowC] = useState(false);

  const [end, setEnd] = useState("");
  const [details, setDetails] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [apps, setApps] = useState([]);
  const [showOrder, setShowOrder] = useState([
    showDate,
    showName,
    showReq,
    showRes,
    showImp,
    showClick,
    showRev,
    showFill,
    showC,
  ]);
  const [listOrder, setListOrder] = useState([
    { Date: "date" },
    { App_Name: "app_id" },
    { AD_Request: "requests" },
    { AD_Response: "responses" },
    { Impressions: "impressions" },
    { Clicks: "clicks" },
    { Revenue: "revenue" },
    { Fill_Rate: "(data.requests / data.responses) * 100" },
    { CTR: "(data.clicks / data.impressions) * 100" },
  ]);

  const fetch = async () => {
    const d = await axios.get(
      `http://go-dev.greedygame.com/v3/dummy/report?startDate=2021-06-01&endDate=2021-06-30`
    );
    const { data } = await axios.get(
      "http://go-dev.greedygame.com/v3/dummy/apps"
    );
    if (d && data) {
      setDetails(d["data"].data);
      setApps(data["data"]);
      setShow(true);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <FormContext.Provider
      value={{
        start,
        setStart,
        show,
        setShow,
        end,
        setEnd,
        details,
        setDetails,
        keyword,
        setKeyword,
        listOrder,
        setListOrder,
        apps,
        setApps,
        setShowC,
        setShowClick,
        setShowDate,
        setShowFill,
        setShowImp,
        setShowReq,
        setShowRes,
        setShowName,
        setShowRev,
        showC,
        showClick,
        showDate,
        showFill,
        showImp,
        showName,
        showReq,
        showRes,
        showRev,
        showOrder,
        setShowOrder
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const FormState = () => {
  return useContext(FormContext);
};

export default FormProvider;
