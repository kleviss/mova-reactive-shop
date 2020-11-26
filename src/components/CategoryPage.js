import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const CategoryPage = ({ match }) => {
  const [categoryItems, setCategoryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?category=${match.params.id}&tag=sports`;

  useEffect(() => {
    const fetchCategoryItems = async () => {
      setIsError(false);
      setIsEmpty(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        if (result.data.length === 0) setIsEmpty(true);

        setCategoryItems(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchCategoryItems();
    console.log("Category Items:");
    console.log(categoryItems);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <h1>Category Page</h1>
      {isError && <div>Something went wrong ... Please reload the page</div>}
      {isEmpty && <div>No items at the moment ... Check back next year :p</div>}

      {isLoading ? (
        <div>Getting your favorite apparel...</div>
      ) : (
        <div>
          {" "}
          {categoryItems.map((item) => (
            <Fragment key={item.itemId}>
              <h4>{item.displayName}</h4>
              <p>{item.description}</p>
              <img alt={item.displayName} src={item.picture} />
            </Fragment>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default CategoryPage;
