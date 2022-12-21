import React, { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [start, setStart] = useState("");
  const [show, setShow] = useState(false);

  const [end, setEnd] = useState("");
  const [details, setDetails] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [apps, setApps] = useState([]);
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

  useEffect(() => {
    console.log(details);
  }, [details]);

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
