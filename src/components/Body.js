import Cards from "./cards";
import reslist from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    // const [listofRes, setlistofRes] = useState(reslist);
    // RESLIST - ORIGINAL
    const [listofRes, setlistofRes] = useState([]);
    const [listofRes2,setlistofRes2] = useState(reslist);
    const[searchtext,setSearchtext] = useState("");
    const[copyforsearch,setCopyforsearch] = useState([]);
    console.log("body rendered");

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        setlistofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    useEffect(() => {
        fetchData();
      }, []);

    // const fetchData = async (latitude, longitude, filters) => {
    //     const url = "http://localhost:3000/fetchRestaurants";
      
    //     const payload = {
    //       lat: latitude,
    //       lng: longitude,
    //       nextOffset: "COVCELQ4KIDgx9OKxsuYdTCnEw==",
    //       widgetOffset: {
    //         NewListingView_category_bar_chicletranking_TwoRows: "",
    //         NewListingView_category_bar_chicletranking_TwoRows_Rendition: "",
    //         Restaurant_Group_WebView_SEO_PB_Theme: "",
    //         collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: "10",
    //         inlineFacetFilter: "",
    //         restaurantCountWidget: "",
    //       },
    //       filters: filters,
    //       seoParams: {
    //         seoUrl: "https://www.swiggy.com/",
    //         pageType: "FOOD_HOMEPAGE",
    //         apiName: "FoodHomePage",
    //       },
    //       page_type: "DESKTOP_WEB_LISTING",
    //       _csrf: "oysTTqAE1zDQ-mVSJ2rPZkhyi2ep0XFkhxU4nS1g",
    //     };
      
    //     const options = {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(payload),
    //     };
      
    //     try {
    //       const response = await fetch(url, options);
    //       if (!response.ok) {
    //         throw new Error(`Error fetching restaurants: ${response.status}`);
    //       }
    //       const data = await response.json();
    //       return data;
    //     } catch (error) {
    //       console.error("Error fetching restaurants:", error);
    //       throw error;
    //     }
    //   };
      
    //   useEffect(() => {
    //     const lat = 23.2599333;
    //     const lng = 77.412615;
    //     const filters = {};
      
    //     fetchData(lat, lng, filters)
    //       .then((data) => {
    //         console.log("Fetched restaurant data:", data);
    //         // Process the restaurant data here
    //         setlistofRes(data);
    //       })
    //       .catch((error) => {
    //         console.error("Failed to fetch restaurants:", error);
    //       });
    //   }, []);
      

  if (!listofRes || listofRes.length === 0) {
  return <Shimmer />;
}
   
    return (
        <div className="body">
            <div className="Filter">




                <input className="search" type="text" value={searchtext} onChange={(event)=>{
                    setSearchtext(event.target.value)
                }}/>



                <button className="searchbtn" onClick={()=>{
                    const searchedlist = reslist.filter((res) => 
                    res.info.name.toLowerCase().includes(searchtext.toLowerCase()))
                    setlistofRes(searchedlist)
                }}>Search</button>


                <button className="btn1" onClick={() => {
                     
                    const filteredlist = listofRes.filter((res) => res.info.avgRating > 4);
                    setlistofRes(filteredlist);
                    const filteredlist2 = reslist.filter((res) => res.info.avgRating > 4);
                    setlistofRes2(filteredlist2);
                }}>TOP RATED RESTAURANTS</button>



            </div>
            <div className="res-cards">
                {listofRes.map((data) => (
                    <Link key={data.info.id} to={"/restaurant/" + data.info.id}><Cards resdata={data} /></Link>
                    
                ))}
                {listofRes2.map((data) => (
                    // <Cards key={data.info.id} resdata={data} />
                    <Link key={data.info.id} to={"/restaurant/" + data.info.id}><Cards resdata={data} /></Link>
                ))}
            </div>



            
        </div>
    );
}

export default Body;
