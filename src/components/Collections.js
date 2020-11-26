import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Collections = () => {
  const [collections, setCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/collections`;

  useEffect(() => {
    const fetchCollections = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setCollections(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchCollections();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {console.log(collections)}
      {isError && <div>Something went wrong ... Please reload the page</div>}

      {isLoading ? (
        <div>Getting your favorite apparel...</div>
      ) : (
        <div>
          {" "}
          {collections.map((tile) => (
            <Link
              key={tile.displayName}
              to={`/collection/${tile.collectionId}`}
            >
              <h4>{tile.displayName}</h4>
            </Link>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default Collections;
