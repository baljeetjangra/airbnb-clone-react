import { Button } from "@material-ui/core";

import React, { useState } from "react";
import "../assets/css/banner.css";
import Search from "./Search";

const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner___search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button variatn="outlined">Expolore Nearby</Button>
      </div>
    </div>
  );
};

export default Banner;
