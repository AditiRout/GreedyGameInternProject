import React from "react";
import { FormState } from "./../config/FormProvider";
import "./Order.css";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@material-ui/icons";
import { useState } from "react";

const orderBy = (list, value, direction) => {
  if (direction === "asc") {
    return [...list].sort((a, b) => (a[value] > b[value] ? 1 : -1));
  }

  if (direction === "desc") {
    return [...list].sort((a, b) => (a[value] > b[value] ? -1 : 1));
  }

  return list;
};

const SortArrow = ({ direction }) => {
  if (!direction) {
    return <></>;
  }

  if (direction === "desc") {
    return (
      <div className="heading_arrow">
        <KeyboardArrowDownRounded color="blue" />
      </div>
    );
  } else {
    return (
      <div className="heading_arrow">
        <KeyboardArrowUpRounded color="inherit" />
      </div>
    );
  }
};
const Order = () => {
  const { details, setDetails, listOrder, showOrder } = FormState();
  const [direction, setDirection] = useState();
  const [value, setValue] = useState();

  const switchDirection = () => {
    if (!direction) {
      setDirection("desc");
    } else if (direction === "desc") {
      setDirection("asc");
    } else {
      setDirection(null);
    }
  };

  const setValueAndDirection = (value) => {
    switchDirection();
    setValue(value);
    const orderedlist = orderBy(details, value, direction);
    setDetails(orderedlist);
  };
  return (
    <>
      Click on the column names to get the data sorted according to that column(Data
      available from 1st june 2021 to 30th June 2021,select a particular range to display data in that range)
      <div className="headline">
        {listOrder.map(
          (data, index) =>
            (!showOrder[index] && (
              <thead>
                <button
                  key={index}
                  className="btn "
                  onClick={() => setValueAndDirection(`${Object.values(data)}`)}
                >
                  {`${Object.keys(data)}`}
                  {value === `${Object.values(data)}` && (
                    <SortArrow direction={direction} />
                  )}
                </button>
              </thead>
            ))
        )}
      </div>
    </>
  );
};

export default Order;
