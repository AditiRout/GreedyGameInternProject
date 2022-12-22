import React,{useEffect} from "react";
import "./HideColumn.css";
import { FormState } from "./../config/FormProvider";
const HideColumn = () => {
  const {
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
  } = FormState();

  const handleOnChangeName = () => {
    if (!showName) {
      setShowName(true);
      console.log(showOrder)
    } else {
      setShowName(false);
    }
  };
  const handleOnChangeDate = () => {
    if (!showDate) {
      setShowDate(true);
    } else {
      setShowDate(false);
    }
  };
  const handleOnChangeReq = () => {
    if (!showReq) {
      setShowReq(true);
    } else {
      setShowReq(false);
    }
  };
  const handleOnChangeRes = () => {
    if (!showRes) {
      setShowRes(true);
    } else {
      setShowRes(false);
    }
  };
  const handleOnChangeImp = () => {
    if (!showImp) {
      setShowImp(true);
    } else {
      setShowImp(false);
    }
  };
  const handleOnChangeClick = () => {
    if (!showClick) {
      setShowClick(true);
    } else {
      setShowClick(false);
    }
  };
  const handleOnChangeRev = () => {
    if (!showRev) {
      setShowRev(true);
    } else {
      setShowRev(false);
    }
  };
  const handleOnChangeFill = () => {
    if (!showFill) {
      setShowFill(true);
    } else {
      setShowFill(false);
    }
  };
  const handleOnChangeCTR = () => {
    if (!showC) {
      setShowC(true);
    } else {
      setShowC(false);
    }
  };
  useEffect(()=>{
    setShowOrder([showDate,showName,showReq,showRes,showImp,showClick,showRev,showFill,showC])
  },[setShowOrder, showC, showClick, showDate, showFill, showImp, showName, showReq, showRes, showRev])

  return (
    <div className="container">
      Select Columns to hide:
      <input
        type="checkbox"
        value="name"
        checked={showName}
        onChange={handleOnChangeName}
      />
      App_Name
      <input
        type="checkbox"
        value="name"
        checked={showDate}
        onChange={handleOnChangeDate}
      />
      Date
      <input
        type="checkbox"
        value="name"
        checked={showReq}
        onChange={handleOnChangeReq}
      />
      Requests
      <input
        type="checkbox"
        value="name"
        checked={showRes}
        onChange={handleOnChangeRes}
      />
      Response
      <input
        type="checkbox"
        value="name"
        checked={showRev}
        onChange={handleOnChangeRev}
      />
      Revenue
      <input
        type="checkbox"
        value="name"
        checked={showImp}
        onChange={handleOnChangeImp}
      />
      Impressions
      <input
        type="checkbox"
        value="name"
        checked={showClick}
        onChange={handleOnChangeClick}
      />
      Clicks
      <input
        type="checkbox"
        value="name"
        checked={showFill}
        onChange={handleOnChangeFill}
      />
      Fill_Rate
      <input
        type="checkbox"
        value="name"
        checked={showC}
        onChange={handleOnChangeCTR}
      />
      CTR
    </div>
  );
};

export default HideColumn;
