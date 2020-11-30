import React from "react";
import Typography from "@material-ui/core/Typography";

const PriceTag = ({ originalPrice, currentPrice }) => {
  if (originalPrice > currentPrice) {
    return (
      <Typography style={{ display: "flex" }} variant="h6" gutterBottom>
        <del>
          {"€"}
          {originalPrice}
        </del>
        <Typography variant="h5" color="secondary" gutterBottom>
          {"€"}
          {currentPrice}
        </Typography>
      </Typography>
    );
  } else {
    return (
      <Typography variant="h6" gutterBottom>
        {"€"}
        {currentPrice}
      </Typography>
    );
  }
};

export default PriceTag;
