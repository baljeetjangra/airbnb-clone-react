import React, { useState } from "react";
import "../assets/css/search.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { People } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onCHange={handleSelect} />
      <h2>
        Number of Guests <People />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button>Search Airbnb</Button>
    </div>
  );
};

export default Search;
