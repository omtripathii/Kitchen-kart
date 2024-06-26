import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();
  const fetchdata = async () => {
    try {
      const response = await fetch(API + resId);
      const data = await response.json();
      console.log(data);
      setMenuData(data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);

  if (menuData === null) return <Shimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    locality,
    areaName,
  } = menuData?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
      ?.card || {};

  return (
    <div className="resmenu">
      <div className="menuinfo">
        <h1>{name}</h1>
        <h3>
          {"⭐" + avgRating}
          {"(" + totalRatingsString + ")"}
          {" • " + costForTwoMessage}
        </h3>
        <h4>{locality}</h4>
        <h5>{areaName}</h5>
        <div className="menu">
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name}
                {"- Rs."}{item.card.info.defaultPrice/100 || item.card.info.price/100}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
