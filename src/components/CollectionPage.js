import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

const CollectionPage = ({ match }) => {
  const [collectionItems, setCollectionItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const url = `https://5m6exoj3o7.execute-api.eu-west-1.amazonaws.com/prod/items?collection=${match.params.id}&tag=sports`;

  useEffect(() => {
    const fetchCollectionItems = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setCollectionItems(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchCollectionItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {console.log(collectionItems)}
      {isError && <div>Something went wrong ... Please reload the page</div>}

      {isLoading ? (
        <div>Getting your favorite apparel...</div>
      ) : (
        <div>
          {" "}
          {collectionItems.map((item) => (
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

export default CollectionPage;
