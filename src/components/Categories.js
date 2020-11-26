import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/categories`;

  useEffect(() => {
    const fetchCategories = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setCategories(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
      
      console.log("Categories:");
      console.log(categories);
    };

    fetchCategories();
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <h1>Categories</h1>
      {isError && <div>Something went wrong ... Please reload the page</div>}

      {isLoading ? (
        <div>Getting your favorite apparel...</div>
      ) : (
        <div>
          {" "}
          {categories.map((category) => (
            <Link
              key={category.displayName}
              to={`/category/${category.categoryId}`}
            >
              <h4>{category.displayName}</h4>
            </Link>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Categories;
